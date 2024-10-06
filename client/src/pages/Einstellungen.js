import React, { useState } from "react";

function Einstellungen() {
  const [rssLink, setRssLink] = useState("");

  const add = () => {
    console.log("Add");
    console.log(rssLink);
  };

  return (
    <div className="feedContainer">
      <label>RSS-Feed-Link</label>
      <input
        type="text"
        onChange={(event) => setRssLink(event.target.value)}
        placeholder="Enter RSS Feed URL"
      />
      <button onClick={add}>Add Link</button>
    </div>
  );
}

export default Einstellungen;
