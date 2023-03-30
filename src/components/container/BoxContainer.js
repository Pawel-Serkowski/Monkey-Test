import React, { useState, useRef, useEffect } from "react";

import ValueBox from "../boxes/ValueBox";
import { generateLevel } from "./generate-level";
import "./BoxContainer.css";

const level = 3;
const tiles = generateLevel(level);
const how_many_tiles = tiles.length;

const BoxContainer = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const correctNextNumber = useRef(1);

  const STYLE = {
    gridTemplateColumns: `repeat(${level}, 1fr)`,
    gridTemplateRows: `repeat(${level}, 1fr)`,
    width: `${100 * 0.75 * level}px`,
    height: `${100 * 0.75 * level}px`,
  };

  const checkCorrectness = (clicked_number) => {
    if (clicked_number !== correctNextNumber.current) {
      setIsAllOpen(true);
      return true;
    }
    correctNextNumber.current = correctNextNumber.current + 1;
    if (clicked_number === how_many_tiles) {
      console.log("You win");
    }
    return false;
  };

  useEffect(() => {
    const hideTilesHandler = () => {
      setIsAllOpen(false);
    };

    const showTilesHandler = () => {
      setIsAllOpen(true);
      setTimeout(hideTilesHandler, ((level - 1) * 2 + 1) * 1000);
    };
    showTilesHandler();
  }, []);

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
