const express = require("express");
const router = express.Router();
const fs = require("fs");

function readQuestions() {
  const questionsData = fs.readFileSync("./questionnaire.json");
  const parsedData = JSON.parse(questionsData);
  return parsedData;
  //   console.log(parsedData);
}

router.get("/", (req, res) => {
  const question = readQuestions();
  res.json(question);
});

module.exports = router;
