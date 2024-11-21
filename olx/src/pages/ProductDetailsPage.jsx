import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

const ProductDetailsPage = () => {
  const param = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     axios
  //       .get(`http://localhost:3000/products/${id}`)
  //       .then((res) => setProduct(res.data))
  //       .catch(() => setProduct(null))
  //       .finally(() => setLoading(false));
  //   }, [id]);
  console.log(param);
  async function fetchingData(param) {
    try {
      let response = await axios.get(
        `http://localhost:3000/products/${param.id}`
      );
      //   let data = await response.json();
      console.log(response);
      setLoading(false);
      setProduct(response.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(() => {
    fetchingData(param);
  }, []);
  console.log(product);
  if (loading) return <Loading />;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.category}</p>
      <p>Price: {product.price}</p>
      <p>Location: {product.location}</p>
      <p>Seller: {product.seller.name}</p>
      <p>Email: {product.seller.email}</p>
      <div className="images">
        {product.images.map((img, index) => (
          <img key={index} src={img} alt={`Product Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
