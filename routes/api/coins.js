const express = require('express');
const router = express.Router();


router.post('/getOutcome', async (req, res) => {
    try {
        res.send('testing getOutcome');
        //TODO: call API to get data;
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
})

module.exports = router;