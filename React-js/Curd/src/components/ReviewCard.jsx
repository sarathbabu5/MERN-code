import React from "react";

const ReviewCard = ({ data }) => {
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
              <h2>{item.name}</h2>
              <p>{item.job}</p>
              <p>{item.text}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReviewCard;
