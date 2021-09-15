import React from "react";
import "./Home.css";
import HomePic from "./img/Ruffwear.jpeg";

const Home = () => {
  return (
    <div className="container">
      <a href="http://www.localhost:3000">
        <img src={HomePic} className="HomePic" alt="company logo" />
      </a>
    </div>
  );
};

export default Home;
