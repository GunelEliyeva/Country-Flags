import React, { useEffect, useState } from "react";

import "./index.scss";

const InputRegionFilter = ({ setCountries }) => {
  const [datacountries, setDataCountries] = useState([]);
  useEffect(() => {
    fetch(" https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setDataCountries(data));
  }, []);

  const handleInput = (e) => {
    let newCountryData = datacountries.filter((elem) =>
      elem.name.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setCountries(newCountryData);
  };

  const handleRegion = (e) => {
    let newRegionData = datacountries.filter((element) =>
      element.region.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setCountries(newRegionData);
  };

  return (
    <div className="input-filter">
      <div className="search">
        {/* <i class="fa-solid fa-magnifying-glass"></i> */}
        <input
          onChange={(e) => handleInput(e)}
          className="input"
          type="text"
          placeholder="Search for a country"
        />
      </div>
      <div className="region-filter">
        <select className="select" onChange={(e) => handleRegion(e)}>
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
};

export default InputRegionFilter;
