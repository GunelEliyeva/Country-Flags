import React from "react";
import { uid } from "uid";
import "./index.scss";

const Card = ({ countries }) => {
  const handleCardClick = (element) => {
    console.log(element);
  };
  return (
    <div className="card-component">
      <div className="cards">
        {countries.map((element) => {
          return (
            <div
              key={uid()}
              className="card"
              onClick={() => handleCardClick(element)}
            >
              <img src={element.flags.png} />
              <h2>{element.name}</h2>
              <p>Population: {element.population}</p>
              <p>Region: {element.region}</p>
              <p>Capital: {element.capital}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
