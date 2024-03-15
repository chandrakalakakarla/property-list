const express = require("express");
const subscriber = require("./subscriber");
const router = express.Router();

router.post("/Reg", async function (req, res) {
    try {
        const newsubscriber = new subscriber({ email: req.body.email });
        await newsubscriber.save();
        res.send('Subscription Successfull')
    } catch (error) {
        res.status(500).json(error);
    }
});


module.exports = router;