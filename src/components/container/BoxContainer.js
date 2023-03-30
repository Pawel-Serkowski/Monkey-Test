import React, { useState, useRef } from "react";

import ValueBox from "../boxes/ValueBox";

import "./BoxContainer.css";

const level = 3;
const tiles = [1, 2, 3, 4];
const how_many_tiles = tiles.length;

const BoxContainer = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const correctNextNumber = useRef(1);

  const STYLE = {
    gridTemplateColumns: `1fr 1fr`,
    gridTemplateRows: "1fr 1fr",
  };

  const checkCorrectness = (clicked_number) => {
    if (clicked_number !== correctNextNumber.current) {
      setIsAllOpen(true);
      /*message to player because he lost*/
      return true; //return this tile is wrong
    }
    correctNextNumber.current = correctNextNumber.current + 1;
    if (clicked_number === how_many_tiles) {
      alert("You Win!!!"); //player won
    }
    return false;
  };

  return (
    <section className="box-container" style={STYLE}>
      {tiles.map((value) => {
        return (
          <ValueBox
            value={value}
            key={value}
            isAllOpen={isAllOpen}
            checkingFunc={checkCorrectness}
          />
        );
      })}
    </section>
  );
};

export default BoxContainer;
