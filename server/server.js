const cors = require("cors");
const express = require("express");
const questionsRouter = require("./questionsRoute/questionsRoute");
const app = express();
const PORT = 8088;

app.use(cors());
app.use(express.json());
app.use(express.static("/images"));
app.get("/", (req, res) => {
  res.send("It's working!");
});

app.use("/questions", questionsRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}.`);
});
