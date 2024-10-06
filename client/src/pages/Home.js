import axios from "axios";
import { useEffect, useState } from 'react';
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfArticles, setListOfArticles] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/articles").then((response) => {
      setListOfArticles(response.data);
      console.log("response.data")
      console.log(response.data);
    });
  }, []);

    // Optional: use this to log the updated state whenever it changes
    useEffect(() => {
      console.log("listOfArticles")
      console.log(listOfArticles);
    }, [listOfArticles]);

    return (
      <div>
        {listOfArticles.map((value, key) => (
          <div 
            key={key} 
            className="article">
            <div className="title"> {value.articletitle}</div>
            <div className="body"> {value.articlelink}</div>
          </div>
        ))}
      </div>
    );
}

export default Home;
