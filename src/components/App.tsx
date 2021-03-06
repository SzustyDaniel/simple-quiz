import React from "react";
import "./App.scss";
import GameBoardPage from "./game/game-board/GameBoardPage";
import Header from "./common/Header";
import CreateGamePage from "./game/create-game/CreateGamePage";
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./home/HomePage";
import NotFoundPage from "./NotFoundPage";
import EndGamePage from "./game/end-game/EndGamePage";
import TopScoresPage from "./top-scores/TopScoresPage";
import AboutPage from "./about/AboutPage";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Redirect path='/' exact to='/home' />
        <Route path='/home' component={HomePage} />
        <Route path='/game/create' component={CreateGamePage} />
        <Route path='/game/board' component={GameBoardPage} />
        <Route path='/game/end' component={EndGamePage} />
        <Redirect from='/game' to='/game/create' />
        <Route path='/top' component={TopScoresPage} />
        <Route path='/about' component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
