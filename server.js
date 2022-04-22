const express = require('express');
const connectDB = require('./config/db');
connectDB();
const app = express();
const path = require('path');
app.use(express.json({extended: false}));
app.use('/static', express.static('public'));

app.use('/api/coins', require('./routes/api/coins'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))});

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));