/**
 * Visit this API for more info
 * https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/
 */
require("dotenv").config();
import axios from "axios";

const url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
const apiKey = process.env.YANDEX_API_KEY;

const text = "hello how are you?";
// language we want to translate to
// visit API for full list of language codes

const lang = "es";

// do we want to include the detected language in the response
// again visit API for more info
const options = 1;

const data = `key=${apiKey}&text=${text}&lang=${lang}&options=${1}`;

axios
  .post(url, data, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  })
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
