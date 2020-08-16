import React from "react";
import "./App.scss";
import GamePage from "./game/GamePage";
import Header from "./common/Header";

function App() {
  return (
    <div className='App'>
      <Header />
      <GamePage />
    </div>
  );
}

export default App;
