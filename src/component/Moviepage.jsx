import React, { useEffect, useState } from "react";
import axios from "axios";
import bgImage from "../image/bgImage.jpeg";
import logo from "../image/logo.png";
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
  }, [setLinks, setInfo]);

  const handleClickLink = (link, i) => {
    axios.get(link).then((response) => {
      let getInfo = [...links];
      getInfo[i].info.name = response.data.name;
      getInfo[i].info.model = response.data.model;
      getInfo[i].info.passengers = response.data.passengers;
      setLinks(getInfo);
    });
  };

  return (
    <>
      <div className="main">
        <img style={{ width: "40%" }} src={bgImage} alt="" />
        <div className="information">
          <img src={logo} alt="" className="logo" />
          <h1 className="pagetitle">{info.title}</h1>
          <p className="description">{info.opening_crawl}</p>
          <div className="tablewrap">
            <div className="tablecontent">
              <span className="line"></span>
              <div className="col">
                <span className="coltitle">#Number</span>
                {links.map((el, i) => (
                  <span key={i}>Starship{i + 1}</span>
                ))}
              </div>
              <div className="col">
                <span className="line2"></span>
                <span className="coltitle">Link</span>
                {links.map((el, i) => (
                  <span key={i}>{el.link}</span>
                ))}
              </div>
              <div className="col">
                <span className="line2"></span>
                <span className="coltitle">name</span>
                {links.map((el, i) => {
                  return <span key={i}>{el.info.name}</span>;
                })}
              </div>
              <div className="col">
                <span className="line2"></span>
                <span className="coltitle">Model</span>
                {links.map((el, i) => {
                  return <span key={i}>{el.info.model}</span>;
                })}
              </div>
              <div className="col">
                <span className="line2"></span>
                <span className="coltitle">Passengers</span>
                {links.map((el, i) => {
                  return <span key={i}>{el.info.passengers}</span>;
                })}
              </div>
              <div className="col buttoncol">
                <span className="line2"></span>
                <span className="coltitle">Action</span>
                {links.map((el, i) => (
                  <button key={i} onClick={() => handleClickLink(el.link, i)}>
                    get info
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Moviepage;
