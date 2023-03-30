import React, { useState } from "react";

import "./ValueBox.css";

const ValueBox = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);

  const tileOnClickHandler = () => {
    if (props.isAllOpen || isActive) return;
    setIsActive(true);
    setIsError(props.checkingFunc(props.value));
  };

  return (
    <div
      className={`value-box ${isActive ? "active" : ""} ${
        isError ? "error" : ""
      }`}
      onClick={tileOnClickHandler}
    >
      {isActive || props.isAllOpen ? props.value : ""}
    </div>
  );
};

export default ValueBox;
