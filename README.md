# SLACK TRANSLATOR
Slack Translator is an app that allows you to translate messages to different messages in Slack. This application uses the [Yandex Langauge Translation API](https://tech.yandex.com/translate/) to translate messages to different languages,

To translate you use the `/translate` slash command to translate messages. Here is an example of how to do that.

### Example
```
/translate en-es hello
```
This command translates a message from English to Spanish. Alternatively you can do

```
/translate es hello
```
In this case the language of the message you sent will be automatically detected and translated to the language matching the code you supplied.

In order for the app to know what language you want to translate to, you have to supply the language code for the language. If no language is passed, the message is translated to English by default. To get full list of the languages (and their codes) supported check this [list](https://tech.yandex.com/translate/doc/dg/concepts/api-overview-docpage/)

If you want to access this help page from Slack type

```
/translate help
```

## SETTING UP LOCALLY
- Clone this repo
```
git clone https://github.com/andela-rbabalola/slack-translate-project.git
```

- Install dependencies
```
npm install
```

- Create a `.env` file locally - ensure this file added to `.gitignore` so you don't accidentally push it to GitHub. And add your secret keys as specified in the `.env.sample` file.

- Start the server
```
npm start
```
