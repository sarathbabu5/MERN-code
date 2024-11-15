import React from "react";

import { useSelector } from "react-redux";

const CounterValue = () => {
  const counter = useSelector((store) => {
    return store.counterReducer.counter;
  });
  return (
    <div>
      <h1>Counter</h1>
      <h1>{counter}</h1>
    </div>
  );
};

export default CounterValue;
