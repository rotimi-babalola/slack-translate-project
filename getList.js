/* eslint no-undef: 0*/

require('dotenv').config();
const axios = require('axios');

const url = 'https://translate.yandex.net/api/v1.5/tr.json/getLangs';
const apiKey = process.env.YANDEX_API_KEY;

const languageCode = 'en';

const data = `key=${apiKey}&ui=${languageCode}`;

axios
  .post(url, data, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
  .then(response => {
    console.log(response.data);
    // response.data.dirs.forEach(data => {
    //   console.log(data);
    // });
  })
  .catch(error => {
    console.log(error);
  });
