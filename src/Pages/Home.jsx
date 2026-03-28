import React, { useEffect, useState } from "react";
import "../App.css";
import Lite from "../Component/Lite";
import { Link } from "react-router-dom";

const Home = () => {
  const [win, setWin] = useState("");
  const [road, setRoad] = useState([]);
  const [choice, setChoice] = useState(false);
  const Fetch = async () => {
    const rep = await fetch("https://dummyjson.com/products");
    const rep2 = await rep.json();
    setRoad(rep2.products);
    console.log(rep2.products);
  };

  useEffect(() => {
    Fetch();
  }, [win]);

  return (
    <div className="read">
      <div className="roadd">
        <input className="weeee" type="text" placeholder="Search" />
        <div className=""></div>

        <Link className="fly" to="/dash">
          Explore more
        </Link>
      </div>

      <div className="wello">
        {road.map((item, index) => {
          return <Lite key={index} value={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
