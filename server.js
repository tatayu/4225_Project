const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
connectDB();
const app = express();
app.use(express.json({ extended: false }));
app.use('/static', express.static('public'));

app.use('/api/coins', require('./routes/api/coins'));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, '/index.html'));
// });

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
