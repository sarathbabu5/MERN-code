import React from "react";

const CoffeeCard = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div
            key={item.id}
            style={{ display: "flex", gap: "20px", marginTop: "5px" }}
          >
            <div>
              <img
                src={item.image}
                alt=""
                style={{ height: "250px", width: "250px" }}
              />
            </div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <ul>
                {item.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CoffeeCard;
