import React from "react";

import ValueBox from "../boxes/ValueBox";

import "./BoxContainer.css";

const tiles = [1, 2, 3, 4];
const BoxContainer = () => {
  const STYLE = {
    gridTemplateColumns: "1fr 1fr",
    gridTemplateRows: "1fr 1fr",
  };

  return (
    <section className="box-container" style={STYLE}>
      {tiles.map((value) => {
        return <ValueBox value={value} key={value} />;
      })}
    </section>
  );
};

export default BoxContainer;
