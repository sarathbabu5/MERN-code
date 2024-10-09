import React, { useState } from "react";
import Button from "./Button";
export const Counter = () => {
  const [count, setCount] = useState(0);

  function addclick() {
    setCount(count + 1);
  }
  function subclick() {
    setCount(count - 1);
  }
  function doubleclick() {
    setCount(count * 2);
  }
  return (
    <div>
      <div>
        <h2>Counter</h2>
        <h4>{count}</h4>
        <Button buttonText="ADD" click={addclick} />
        <Button buttonText="SUB" click={subclick} />
        <Button buttonText="Double" click={doubleclick} />
      </div>
    </div>
  );
};
