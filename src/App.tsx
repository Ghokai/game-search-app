import React from "react";
import "./App.css";
import GameStore from "./components/GameStore";
import Main from "./components/Main";

const App: React.FC = () => {
  return (
    <GameStore>
      <Main />
    </GameStore>
  );
};

export default App;
