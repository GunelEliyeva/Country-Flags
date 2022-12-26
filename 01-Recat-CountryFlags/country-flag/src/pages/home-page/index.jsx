import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/cards";
import InputRegionFilter from "../../components/search-input";
import Header from "../../layouts/header";

import "./index.scss";

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(" https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="home-page">
      <InputRegionFilter setCountries={setCountries} />
      <Card countries={countries} />
     
    </div>
  );
};

export default HomePage;
