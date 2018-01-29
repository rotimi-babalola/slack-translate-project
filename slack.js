require('dotenv').config(); //eslint-disable-line no-undef

const slack = require('slack'); //eslint-disable-line no-undef
const token = process.env.SLACK_BOT_TOKEN; //eslint-disable-line no-undef
const bot = new slack({ token });
const channel = 'D8ZSRQM42';
const text = 'hello world @here';

bot.chat
  .postMessage({ token, channel, text, as_user: true })
  .then(response => {
    console.log('success', response);
  })
  .catch(error => {
    console.log('Oops ', error);
  });
