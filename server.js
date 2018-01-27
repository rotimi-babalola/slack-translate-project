import express from "express";
import bodyParser from "body-parser";
import TranslatorController from "./controllers/translator";

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.post("/translate", TranslatorController.translateText);

app.listen(3000, () => console.log("Example app listening on port 3000!"));
