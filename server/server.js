const express = require("express");
const app = express();
const articleRouter = require("./routes/articles");
const port = 5000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/articles", articleRouter);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
