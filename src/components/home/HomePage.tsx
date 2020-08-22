import React from "react";
import "./HomePage.scss";

const HomePage = (props: any) => {
  const nextPath = (path: string) => {
    props.history.push(path);
  };

  return (
    <section className='home-container'>
      <h1 className='home-title'>Simple Quiz</h1>
      <button className='app-button' onClick={() => nextPath("/game/create")}>
        Start a new game
      </button>
      <button className='app-button' onClick={() => nextPath("/top")}>
        Go to top scores
      </button>
      <button className='app-button' onClick={() => nextPath("/about")}>
        About the app
      </button>
    </section>
  );
};

export default HomePage;
