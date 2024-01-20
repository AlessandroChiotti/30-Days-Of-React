import React from "react";
import ReactDOM from "react-dom/client";
import cssLogo from "./images/css_logo.png";
import htmlLogo from "./images/html_logo.png";
import jsLogo from "./images/js_logo.png";
import reactLogo from "./images/react_logo.png";

const Header = ({ title }) => (
  <header>
    <div className="header-wrapper">
      <h1>{title}</h1>
    </div>
  </header>
);

const LogosComponent = ({ logos }) =>
  logos.map(({ src, alt }) => <img src={src} alt={alt} />);

// JSX element, main
const Main = ({ logos }) => {
  return (
    <main>
      <div className="main-wrapper">
        <LogosComponent logos={logos} />
      </div>
    </main>
  );
};

// JSX element, app
const App = () => {
  const title = "Front End Technologies";

  const logos = [
    { src: htmlLogo, alt: "htmlLogo" },
    { src: cssLogo, alt: "cssLogo" },
    { src: jsLogo, alt: "jsLogo" },
    { src: reactLogo, alt: "reactLogo" },
  ];

  return (
    <div className="app">
      <Header title={title} />
      <Main logos={logos} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
