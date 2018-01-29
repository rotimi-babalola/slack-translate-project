require('dotenv').config(); //eslint-disable-line no-undef

import axios from 'axios';
import formatParams from '../helpers/FormatParams';

class TranslatorController {
  /**
   * Static method to translate text.
   * For now we'll hardcode the languages
   */
  static translateText(req, res) {
    console.log(req.body, '++++++++');
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
        res.send(response.data.text[0]);
      })
      .catch(error => {
        res.send(error);
      });
  }

  /**
   * Static method to detect a language's text
   * Not sure we'll need this but leaving it here anyway
   * Could it be a 'play' function???
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
        res.send(response.data.lang);
      })
      .catch(error => {
        res.send(error);
      });
  }
}

export default TranslatorController;
