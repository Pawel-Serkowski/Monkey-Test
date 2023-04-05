import React, { useState, useRef, useEffect } from "react";

import ValueBox from "../boxes/ValueBox";
import { generateLevel } from "./generate-level";
import "./BoxContainer.css";

const level = 3;
const how_many_tiles = level * level;

const BoxContainer = (props) => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const [tiles, setTiles] = useState([]);
  const correctNextNumber = useRef(1);
  const timer = useRef(undefined);

  const STYLE = {
    gridTemplateColumns: `repeat(${level}, 1fr)`,
    gridTemplateRows: `repeat(${level}, 1fr)`,
    width: `${100 * 0.75 * level}px`,
    height: `${100 * 0.75 * level}px`,
  };

  const checkCorrectness = (clicked_number) => {
    if (clicked_number !== correctNextNumber.current) {
      //user fail
      setIsAllOpen(true);
      props.func("You failed!");
      return true;
    }
    correctNextNumber.current = correctNextNumber.current + 1;
    if (clicked_number === how_many_tiles) {
      //user win
      props.func("You Won!");
    }
    return false;
  };

  useEffect(() => {
    const showTilesHandler = () => {
      setTiles(generateLevel(level));
      setIsAllOpen(true);
      timer.current = setTimeout(() => {
        setIsAllOpen(false);
      }, (level - 1) * 3 * 1000);
    };

    if (timer.current) clearTimeout(timer.current);
    if (!props.isGameStarted) {
      setIsAllOpen(true);
      correctNextNumber.current = 1;
      return;
    }
    showTilesHandler();
  }, [props.isGameStarted]);

  return (
    <section className="box-container" style={STYLE}>
      {tiles.map((value) => {
        return (
          <ValueBox
            value={value}
            key={value}
            isAllOpen={isAllOpen}
            checkingFunc={checkCorrectness}
            isGameStarted={props.isGameStarted}
          />
        );
      })}
    </section>
  );
};

export default BoxContainer;
