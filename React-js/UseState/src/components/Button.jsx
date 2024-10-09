import React from "react";

const Button = (props) => {
  const { buttonText, click } = props;
  return (
    <div>
      <button onClick={click}>{buttonText}</button>
    </div>
  );
};

export default Button;
