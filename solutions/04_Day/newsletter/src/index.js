import React from "react";
import ReactDOM from "react-dom/client";

const title = "SUBSCRIBE";
const subtitle = "Sign up with your email address to receive news and updates.";

const Input = () =>
  ["First name", "Last name", "Email"].map((placeholder) => (
    <input type="text" placeholder={placeholder} />
  ));

const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <div className="input-wrapper">
        <Input />
      </div>
      <br />
      <button>Subscribe</button>
    </div>
  </header>
);

const App = () => <div className="app">{<Header />}</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
