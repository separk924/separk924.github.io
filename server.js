var express = require('express');
const path = require('path');

const filePath = path.resolve(__dirname, 'index.html');
const app = express();
const port = 3000;


app.get("/", function (req, res) {
    const filePath = path.resolve(__dirname, 'index.html');
    res.sendFile(filePath);
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});