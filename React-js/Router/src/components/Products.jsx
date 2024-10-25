import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/AuthContextProvider";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { authState } = useGlobalContext;

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products"
      );
      const data = await response.json();
      setProducts(data.data);
    };

    fetchProducts();
  }, []);
  //   console.log(products);
  return (
    <div>
      <h1>Products</h1>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <div>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
              <p>{item.category}</p>
              <p>{item.brand}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
