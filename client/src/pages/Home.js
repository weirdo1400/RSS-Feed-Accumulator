import axios from "axios";
import React,{ useEffect, useState } from 'react';
const convert = require("xml-js");

function Home() {
  const [feed, setFeeds] = useState([]);

  useEffect(() => {
    const fetchFeedLinks = async () => {
      try {
        const response = await axios.get("https://rss-feed-accumulator.onrender.com/feeds");
        const feedLinks = response.data.map((feed) => feed.feedlink);  // Get all feed links
        console.log("Feed Links:", feedLinks);

        // Fetch all RSS feeds for each feed link
        for (const feedLink of feedLinks) {
          fetchFeed(feedLink);  // Fetch the feed for each link
        }
      } catch (error) {
        console.error("Error fetching feed links:", error);
      }
    };

    const fetchFeed = async (feedLink) => {
      try {
        if (!feedLink) return;  // Ensure feedLink is available before making the request
        const response = await axios.get(feedLink);
        console.log(response.data);

        // Convert XML to JSON string
        const converted = convert.xml2json(response.data, {
          compact: true,
          spaces: 2,
        });
        console.log("Converted Feed:", converted);

        // Parse the JSON string into a JavaScript object
        const jsonResult = JSON.parse(converted);

        // Ensure rss.channel exists and access it properly
        const channel = jsonResult.rss?.channel;
        if (!channel) {
          throw new Error("Channel data is missing in the feed.");
        }

        // Extract titles and links from the JSON
        const items = Array.isArray(channel.item) ? channel.item : [channel.item];
        const feedItems = items.map((item) => ({
          title: item.title?._text || "No title",
          link: item.link?._text || "No link",
        }));

        // Update state with the new feed items (append)
        setFeeds((prevFeeds) => [...prevFeeds, ...feedItems]);
      } catch (error) {
        console.error("Error fetching the RSS feed:", error);
      }
    };

    // Fetch the list of feed links first
    fetchFeedLinks();
  }, []);

  return (
    <div>
      <h1>RSS Feed All</h1>
      <ul>
        {feed.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
