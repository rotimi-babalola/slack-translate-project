require('dotenv').config(); //eslint-disable-line no-undef

import axios from 'axios';
import formatParams from '../helpers/FormatParams';
import SlackController from '../controllers/slack';
import matchLanguage from '../helpers/matchLanguage';

class TranslatorController {
  /**
   * Static method to translate text.
   */
  static translateText(req, res) {
    const params = req.body.text.split(' ');
    const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate';
    const apiKey = process.env.YANDEX_API_KEY; //eslint-disable-line no-undef

    const { language, text } = formatParams(params);

    // do we want to include the detected language in the response
    // again visit API for more info
    const options = 1;

    const data = `key=${apiKey}&text=${text}&lang=${language}&options=${options}`;

    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(response => {
        /**
         * data is in an array so we extract the first element of the array
         * what if there are multiple elements in the array???
         */
        // send message to channel or dm
        const channel = req.body.channel_id;
        const text = response.data.text[0];

        SlackController.sendMessage(text, channel);
        /**
         * Hacky?
         * I'm doing this because I don't want to send
         * anything back after sending the message
         */
        res.send(null);
      })
      .catch(error => {
        res.send(error);
      });
  }

  /**
   * Static method to detect a language's text
   * Note that this is not 100% percent accurate
   * but I think its better if you give it long
   * sample text
   */

  static detectLanguage(req, res) {
    const text = req.body.text;
    const url = 'https://translate.yandex.net/api/v1.5/tr.json/detect';
    const apiKey = process.env.YANDEX_API_KEY; //eslint-disable-line no-undef
    const data = `key=${apiKey}&text=${text}`;

    axios
      .post(url, data, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then(response => {
        res.send(matchLanguage(response.data.lang));
      })
      .catch(error => {
        res.send(error);
      });
  }
}

export default TranslatorController;
