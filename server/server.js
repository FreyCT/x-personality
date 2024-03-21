const cors = require("cors");
const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 8088;

app.use(cors());
app.use(express.json());

app.use(express.static("images"));

const readFile = path => JSON.parse(fs.readFileSync(path));

app.get("/questions", (req, res) => {
    const question = readFile("./data/questionnaire.json");
    res.json(question);
});

app.post("/questions", (req, res) => {

    const resultsData = readFile("./data/resultsData.json");
    const type = resultsData.mbti.find(t => t.type === req.body.answer);
    res.json(type);
});

app.get("/images", (req, res) => {
    const data = readFile("./data/resultsData.json");
    const images = data.mbti.map(t => t.imageURL);
    res.json(images);
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}.`);
});
