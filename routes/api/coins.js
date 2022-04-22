const express = require('express');
const router = express.Router();
const Coins = require('../../Models/coins');

router.post('/getOutcome', async (req, res) => {
    try {
        console.log(req.body);
        const getOne = await Coins.findOne({ coinType: req.body.coinType });
        res.send(getOne);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.post('/createCoin', async (req, res) => {
    try {
        const timestamp = new Date().getTime();
        const Data = {
            coinType: req.body.coinType,
            buyFlag: 'false',
            timeStamp: timestamp,
        };
        getCoin = await Coins.findOne({ coinType: req.body.coinType });
        if (getCoin) {
            await Coins.findOneAndUpdate(Data);
        } else {
            createOne = Coins(Data);
            await createOne.save();
        }
        res.send('Coin created');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
