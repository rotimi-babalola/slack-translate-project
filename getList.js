/* eslint no-undef: 0*/
/* eslint no-console: 0*/

require('dotenv').config();
const axios = require('axios');
const fs = require('fs');

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
    fs.writeFile('languages.json', JSON.stringify(response.data.langs), error => {
      if (error) {
        console.log(error);
      }

      console.log('File saved');
    });
  })
  .catch(error => {
    console.log(error);
  });
