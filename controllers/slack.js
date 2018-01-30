require('dotenv').config(); //eslint-disable-line no-undef

import slack from 'slack';
const token = process.env.SLACK_BOT_TOKEN; //eslint-disable-line no-undef
const bot = new slack({ token });

class SlackController {
  static sendMessage(text, channel) {
    return bot.chat.postMessage({ token, channel, text, as_user: true });
  }
}

export default SlackController;
