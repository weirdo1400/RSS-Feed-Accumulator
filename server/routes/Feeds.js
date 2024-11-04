const express = require('express');
const axios = require('axios');
const convert = require('xml-js'); 
const router = express.Router();
const { Feeds } = require('../models');

router.get("/", async (req, res) => {
    const listOfFeeds = await Feeds.findAll();
    res.json(listOfFeeds);
});

router.get("/news", async (req, res) => {
  const listOfFeeds = await Feeds.findAll({
    where: {
      feedcategory: "News",
    },
  });
  res.json(listOfFeeds);
});

router.get("/sport", async (req, res) => {
  const listOfFeeds = await Feeds.findAll({
    where: {
      feedcategory: "Sport",
    },
  });
  res.json(listOfFeeds);
});

router.get("/astronomie", async (req, res) => {
  const listOfFeeds = await Feeds.findAll({
    where: {
      feedcategory: "Astronomie",
    },
  });
  res.json(listOfFeeds);
});

router.get("/technik", async (req, res) => {
  const listOfFeeds = await Feeds.findAll({
    where: {
      feedcategory: "Technik",
    },
  });
  res.json(listOfFeeds);
});

router.get("/spanisch", async (req, res) => {
  const listOfFeeds = await Feeds.findAll({
    where: {
      feedcategory: "Spanisch",
    },
  });
  res.json(listOfFeeds);
});


router.post("/", async (req, res) => {
  const { feedlink, feedcategory } = req.body;
  
  try {
      // Fetch the RSS feed data from the provided feed link
      const response = await axios.get(feedlink);
      
      // Convert the XML response to JSON
      const converted = convert.xml2json(response.data, {
        compact: true,
        spaces: 2,
      });

      // Parse the JSON string into a JavaScript object
      const jsonResult = JSON.parse(converted);

       // Ensure rss.channel exists and access it properly
       const channel = jsonResult.rss?.channel;
       if (!channel) {
         throw new Error("Channel data is missing in the feed.");
       }

      // Access the title of the feed in this structure
      const feedTitle = jsonResult.rss.channel.title._text;

      // Log to ensure correct parsing
      console.log("Feed title:", feedTitle);

      // Now create a feed entry in the database
      const feed = {
          feedlink,
          feedcategory,
          feedname: feedTitle,  // Add the fetched feed title to the database entry
      };
      await Feeds.create(feed);

      // Respond with the created feed entry
      res.json(feed);

  } catch (error) {
      console.error("Error fetching the RSS feed:", error);
      res.status(500).json({ error: "Failed to fetch and parse the feed." });
  }
});
/*
router.post("/", async (req, res) => {
    console.log("tried")
    const feedlink = "feeasdfdlink"
    const feed = {
        feedlink: feedlink,
        feedcategory: "feedcategory",
        feedname: "feedname",
    };
    //const feed = req.body;
    await Feeds.create(feed);
    res.json(feed);
});*/


module.exports = router;