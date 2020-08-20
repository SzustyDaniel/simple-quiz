import React from "react";
import "./HomePage.scss";

const HomePage = (props: any) => {
  const nextPath = (path: string) => {
    props.history.push(path);
  };

  return (
    <div>
      <h1>Simple Quiz page</h1>
      <button onClick={() => nextPath("/game/create")}>Start new game</button>
    </div>
  );
};

export default HomePage;
