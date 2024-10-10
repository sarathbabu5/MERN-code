import React, { useState, useEffect } from "react";
import CoffeeCard from "./CoffeeCard";

const Coffee = () => {
  const [data, setData] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch("http://localhost:3000/coffee");
        const coffeeData = await response.json();
        setData(coffeeData);
        console.log("Data fetched:", coffeeData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    if (fetchData) {
      fetching();
      setFetchData(false);
    }
  }, [fetchData]);

  const handleClick = () => {
    setFetchData(true);
  };

  return (
    <>
      <button onClick={handleClick}>Get Coffee</button>

      <CoffeeCard data={data} />
    </>
  );
};

export default Coffee;
