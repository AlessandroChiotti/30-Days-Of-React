import React from "react";
import ReactDOM from "react-dom/client";
import cssLogo from "./images/css_logo.png";
import htmlLogo from "./images/html_logo.png";
import reactLogo from "./images/react_logo.png";

const header = (
  <header>
    <div className="header-wrapper">
      <h1>Front End Technologies</h1>
    </div>
  </header>
);

const logos = (
  <div>
    <img src={cssLogo} alt="cssLogo" />
    <img src={htmlLogo} alt="htmlLogo" />
    <img src={reactLogo} alt="reactLogo" />
  </div>
);

// JSX element, main
const main = (
  <main>
    <div className="main-wrapper">{logos}</div>
  </main>
);

// JSX element, app
const app = (
  <div className="app">
    {header}
    {main}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
