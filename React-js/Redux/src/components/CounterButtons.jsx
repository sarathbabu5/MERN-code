import React from "react";

import { useDispatch } from "react-redux";
import { addFunction, subFunction } from "../redux/counter/action";
const CounterButtons = () => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(addFunction(1));
  };
  const handleDecrease = () => {
    dispatch(subFunction(1));
  };
  return (
    <div>
      <button onClick={handleIncrease}>increment</button>
      <button onClick={handleDecrease}>decrement</button>
    </div>
  );
};

export default CounterButtons;
