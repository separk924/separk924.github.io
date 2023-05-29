var express = require('express');
const path = require('path');

const filePath = path.resolve(__dirname, 'index.html');
const app = express();
const port = 3000;

app.use(express.static("public"));

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});