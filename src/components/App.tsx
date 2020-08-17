import React from "react";
import "./App.scss";
import GameBoardPage from "./game/game-board/GameBoardPage";
import Header from "./common/Header";
import CreateGamePage from "./game/create-game/CreateGamePage";

function App() {
  return (
    <div className='App'>
      <Header />
      <GameBoardPage />
      <CreateGamePage />
    </div>
  );
}

export default App;
