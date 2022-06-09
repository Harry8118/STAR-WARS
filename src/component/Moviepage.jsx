import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://swapi.dev/api/films/1/";

const Moviepage = () => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setInfo(response.data);
    });
  }, [setInfo]);

  return (
    <div>
      <h1>{info.title}</h1>
      <p>{info.opening_crawl}</p>
      <ul>
        {info.starships?.map((el, i) => {
          return (
            <li key={i}>
              <a href={`${el}`}>{el}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Moviepage;
