import React from "react";

import "./StartButton.css";

const StartButton = (props) => {
  return (
    <button id="start-button" className="start-button" onClick={props.func}>
      {props.actualText}
    </button>
  );
};

export default StartButton;
