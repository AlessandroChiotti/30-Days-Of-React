import React from "react";
import ReactDOM from "react-dom/client";

const header = (
  <header>
    <div className="header-wrapper">
      <h1>SUBSCRIBE</h1>
      <p>Sign up with your email address to receive news and updates.</p>
      <div className="input-wrapper">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Email" />
      </div>
      <br />
      <button>Subscribe</button>
    </div>
  </header>
);

const app = <div className="app">{header}</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
