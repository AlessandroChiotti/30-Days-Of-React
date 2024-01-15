import React from "react";
import ReactDOM from "react-dom/client";
import asabenehImage from "./images/asabeneh.jpg";

const header = (
  <header>
    <div className="header-wrapper">
      <img src={asabenehImage} alt="asabeneh" />
      <h1>Asabeneh Yetayeh</h1>
      <h2>Senior Developer, Finland</h2>
      <p>SKILLS</p>
      <div className="skills">
        <p>HTML</p>
        <p>CSS</p>
        <p>Sass</p>
        <p>Js</p>
        <p>React</p>
        <p>Redux</p>
        <p>Node</p>
        <p>MongoDB</p>
        <p>Python</p>
        <p>Flask</p>
        <p>Django</p>
        <p>NumPy</p>
        <p>Pandas</p>
        <p>Data Analysis</p>
        <p>MySQL</p>
        <p>GraphQL</p>
        <p>D3.js</p>
        <p>Gatsby</p>
        <p>Docker</p>
        <p>Heroku</p>
        <p>Git</p>
      </div>
      <footer>
        Joined on Aug 30, 2020 <br />
      </footer>
    </div>
  </header>
);

const app = <div className="app">{header}</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
