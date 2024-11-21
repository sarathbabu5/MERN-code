import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState();
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      // console.log(res);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <ProductCard data={data} />
    </div>
  );
};

export default Home;
