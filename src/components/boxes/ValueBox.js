import React, { useState, useEffect } from "react";

import "./ValueBox.css";

const ValueBox = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);

  const tileOnClickHandler = () => {
    if (props.isAllOpen || isActive) return;
    setIsActive(true);
    setIsError(props.checkingFunc(props.value));
  };

  useEffect(() => {
    if (!props.isGameStarted) {
      return;
    }
    setIsError(false);
    setIsActive(false);
  }, [props.isGameStarted]);

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
