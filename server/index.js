require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
app.use(express.json());
const PORT = 3131;

app.listen(PORT, () => {
  console.log(` Server is Listening on port ${PORT}`);
});
