import React from "react";
import "./AboutPage.scss";

function AboutPage() {
  return (
    <section className='about-container'>
      <h2 className='about-title'>About the app</h2>
      <div>
        <p>
          The application was developed by{" "}
          <a
            className='about-link'
            href='https://www.linkedin.com/in/daniel-szuster-562a33103'>
            Daniel Szuster
          </a>
          .
        </p>
        <p>
          The application was developed with React.js using{" "}
          <a className='about-link' href='https://reactrouter.com/'>
            React Router
          </a>{" "}
          for spa,{" "}
          <a className='about-link' href='https://facebook.github.io/flux/'>
            React Flux
          </a>{" "}
          for state management and{" "}
          <a className='about-link' href='https://github.com/axios/axios'>
            Axios
          </a>{" "}
          for ajax calls.
        </p>
        <p>
          The questions in the application and their categories are taken from{" "}
          <a className='about-link' href='https://opentdb.com/'>
            Open Trivia Database
          </a>
        </p>
        <p>
          The user data base is currently mocked using{" "}
          <a
            className='about-link'
            href='https://github.com/typicode/json-server'>
            json-server
          </a>{" "}
          package
        </p>
      </div>
    </section>
  );
}

export default AboutPage;
