import React, { useState } from "react";

import BoxContainer from "./components/container/BoxContainer";
import StartButton from "./components/button/StartButton";
import Header from "./components/header/Header";

import "./App.css";

const App = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [inputText, setInputText] = useState("Click button to start game");
  const startButtonHandler = () => {
    setIsStarted((prev_state) => !prev_state);
    const text = isStarted ? "Click button to start game" : "Good Luck!";
    setInputText(text);
  };
  const winTextHandler = (text) => {
    setIsStarted(false);
    setInputText(text);
  };

  return (
    <div className="app">
      <Header text={inputText} />
      <BoxContainer isGameStarted={isStarted} func={winTextHandler} />
      <StartButton
        actualText={!isStarted ? "Start" : "Stop"}
        func={startButtonHandler}
      />
    </div>
  );
};

export default App;
