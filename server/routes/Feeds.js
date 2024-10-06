const express = require('express')
const router = express.Router();
const { Feeds } = require('../models')

router.get("/", async (req, res) => {
    const listOfFeeds = await Feeds.findAll();
    res.json(listOfFeeds);
});

router.post("/", async (req, res) => {
    const feed = req.body;
    await Feeds.create(feed);
    res.json(feed);
});

module.exports = router;