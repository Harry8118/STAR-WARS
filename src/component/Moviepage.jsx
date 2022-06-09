import React, { useEffect, useState } from "react";
import axios from "axios";
import { table } from "react-bootstrap";

const baseURL = "https://swapi.dev/api/films/1/";

const Moviepage = () => {
  const [info, setInfo] = useState({});
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setInfo(response.data);
      let newLinks = [...links];
      response.data.starships.map((item) => {
        newLinks.push({ link: item, info: {} });
      });
      setLinks(newLinks);
    });
  }, [setInfo]);

  const handleClickLink = (link, i) => {
    axios.get(link).then((response) => {
      let getInfo = [...links];
      console.log(getInfo);
      getInfo[i].info.name = response.data.name;
      getInfo[i].info.model = response.data.model;
      getInfo[i].info.passengers = response.data.passengers;
      setLinks(getInfo);
    });
  };

  return (
    <div>
      <h1 className="pagetitle">{info.title}</h1>
      <p className="description">{info.opening_crawl}</p>
      <ul className="starshiplist">
        {links.map((el, i) => {
          return (
            <li key={i} onClick={() => handleClickLink(el.link, i)}>
              Starship {i + 1} {el.link} {el.info.name}
              {el.info.model}
              {el.info.passengers}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Moviepage;
