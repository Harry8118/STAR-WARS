import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import axios from "axios";

const Starshippage = () => {
  const [searchParams] = useSearchParams();
  const [link, setLink] = useState(null);
  useEffect(() => {
    axios.get(`${searchParams.get("starshipLink")}`).then((response) => {
      setLink(response.data);
    });
  }, []);

  return (
    <>
      {link && (
        <div className="starship-page">
          <h1>{link.name}</h1>
          <div className="starship-info">
            <span>Model {link.model}</span>
            <span>Passengers {link.passengers}</span>
          </div>
          <Link to={"/"}>go back</Link>
        </div>
      )}
    </>
  );
};

export default Starshippage;
