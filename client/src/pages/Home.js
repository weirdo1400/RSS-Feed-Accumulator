import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [listOfArticles, setListOfArticles] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/articles").then((response) => {
      setListOfArticles(response.data);
    });
  }, []);

  return (
    <div>
      {listOfArticles.map((value, key) => {
        <div key={key} className="article">
          <div className="title"> {value.title}</div>
          <div className="body"> {value.link}</div>
        </div>;
      })}
      ;
    </div>
  );
}

export default Home;
