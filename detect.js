/**
 * Visit this API for more info
 * https://tech.yandex.com/translate/doc/dg/reference/translate-docpage/
 */
require("dotenv").config();
import axios from "axios";

const url = "https://translate.yandex.net/api/v1.5/tr.json/detect";
const apiKey = process.env.YANDEX_API_KEY;

const text = "hujambo";

const data = `key=${apiKey}&text=${text}`;

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
