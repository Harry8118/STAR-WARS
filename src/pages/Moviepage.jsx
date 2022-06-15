import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import logo from "../assets/logo.png";
const baseURL = "https://swapi.dev/api/films/1/";

const Moviepage = () => {
  const [info, setInfo] = useState({});
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setInfo(response.data);
    });
  }, []);

  return (
    <>
      <div className="movewrap">
        <div className="imagebox"></div>
        <div className="mainbox">
          <img src={logo} alt="logo" className="logo" />
          <h1>{info.title}</h1>
          <p>{info.opening_crawl}</p>
          <ul>
            {info.starships?.map((el, i) => {
              return (
                <Link key={i} to={`/starship/?starshipLink=${el}`}>
                  <li>
                    <span> Starship {i + 1}</span> {el}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Moviepage;
