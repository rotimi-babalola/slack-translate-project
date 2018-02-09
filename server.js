/* eslint no-console: 0 */

import express from 'express';
import bodyParser from 'body-parser';
import TranslatorController from './controllers/translator';
import SendHelp from './middleware/SendHelp';

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Bienvenido a Language translator!!!');
});

app.post('/translate', SendHelp.verifyHelpMessage, TranslatorController.translateText);

// I'm exposing the endpoint here. Although you can't access this from Slack
app.post('/detect', SendHelp.verifyHelpMessage, TranslatorController.detectLanguage);

app.listen(3000, () => console.log('Language Translator escuchando en porto 3000!!!'));
