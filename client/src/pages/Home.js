import axios from "axios";
import { useEffect, useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";
const convert = require("xml-js");

function Home() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await axios.get(
          "https://www.srf.ch/news/bnf/rss/1646",
          {}
        );
        console.log(response.data);
        console.log("Conversion");

        // Convert XML to JSON string
        const converted = convert.xml2json(response.data, {
          compact: true,
          spaces: 2,
        });
        console.log(converted);

        // Parse the JSON string into a JavaScript object
        const jsonResult = JSON.parse(converted);

        // Ensure rss.channel exists and access it properly
        const channel = jsonResult.rss?.channel;
        if (!channel) {
          throw new Error("Channel data is missing in the feed.");
        }

        // Access the first title and link
        const firstItem = Array.isArray(channel.item) ? channel.item[0] : channel.item;
        const firstTitle = firstItem?.title?._text || "No title"; // Accessing the title
        const firstLink = firstItem?.link?._text || "No link";  // Accessing the link

        console.log("Title:", firstTitle); // Logs the first title
        console.log("Link:", firstLink);   // Logs the first link

        // Extract titles and links from the JSON
        const items = Array.isArray(channel.item) ? channel.item : [channel.item];
        const feedItems = items.map((item) => ({
          title: item.title?._text || "No title",
          link: item.link?._text || "No link",
        }));

        setFeed(feedItems);
      } catch (error) {
        console.error("Error fetching the RSS feed:", error);
      }
    };
    fetchFeed();
  }, []);

  return (
    <div>
      <h1>RSS Feed</h1>
      <ul>
        {feed.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
