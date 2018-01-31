/* eslint no-undef: 0*/

const languages = require('../languages.json');

const matchLanguage = code => {
  return `The language detected is ${languages[code]}`;
};

export default matchLanguage;
