require("dotenv").config();

import axios from "axios";

class TranslatorController {
  /**
   * Static method to translate
   * a text. For now we'll hardcode the languages
   */
  static translateText(req, res) {
    console.log(req.body);
    res.send("I got here");
  }
}

export default TranslatorController;
