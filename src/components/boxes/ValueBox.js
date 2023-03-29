import React, { useState } from "react";

import "./ValueBox.css";

const ValueBox = (props) => {
  const [isActive, setIsActive] = useState();

  const tileOnClickHandler = () => {
    setIsActive(true);
    //call testing function
  };

  return (
    <div
      className={`value-box ${isActive ? "active" : ""}`}
      onClick={tileOnClickHandler}
    >
      {isActive ? props.value : ""}
    </div>
  );
};

export default ValueBox;
