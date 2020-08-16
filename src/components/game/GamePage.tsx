import React from "react";
import CreateGame from "./create-game/CreateGame";

function GamePage() {
  return (
    <div className='game-container'>
      <h1>Base game page</h1>
      <CreateGame />
    </div>
  );
}

export default GamePage;
