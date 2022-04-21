const express = require('express');
const app = express();
const path = require('path');
app.use('/static', express.static('public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))});

app.listen(5000);