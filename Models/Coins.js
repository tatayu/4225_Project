const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
    coinType: {
        type: String,
    },
    buyFlag: {
        type: String,
    },
    timestamp: {
        type: Date,
    },
});

module.exports = Coins = mongoose.model('coins', coinSchema);
