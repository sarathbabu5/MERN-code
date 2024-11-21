import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ data }) => {
  const navigate = useNavigate();
  console.log(data);

  return (
    <>
      <div className="productCard">
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => navigate(`/product/${item.id}/view`)}
              >
                <img
                  src={item.images.map((img) => {
                    return img[0];
                  })}
                />
                <h3>{item.title}</h3>
                <p>Price: {item.price}</p>
                <p>{item.location}</p>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default ProductCard;
