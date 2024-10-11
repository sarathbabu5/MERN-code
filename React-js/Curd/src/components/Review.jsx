import React from "react";
import { useState, useEffect } from "react";
import ReviewCard from "./ReviewCard";
const Review = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetching = async () => {
      try {
        const response = await fetch("http://localhost:3000/posts");
        const reviewData = await response.json();
        setData(reviewData);
        console.log("Data fetched:", reviewData);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetching();
  }, []);
  return (
    <div>
      <ReviewCard data={data} />
    </div>
  );
};

export default Review;
