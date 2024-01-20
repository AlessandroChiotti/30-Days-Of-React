import React from "react";
import ReactDOM from "react-dom/client";

const Input = ({ inputFields }) =>
  inputFields.map((placeholder) => (
    <input type="text" placeholder={placeholder} />
  ));

const Header = ({ data }) => {
  const { title, subtitle, inputFields } = data;
  return (
    <header>
      <div className="header-wrapper">
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="input-wrapper">
          <Input inputFields={inputFields} />
        </div>
        <br />
        <button className="subscribe-button">{title}</button>
      </div>
    </header>
  );
};

const App = () => {
  const data = {
    title: "subscribe",
    subtitle: "Sign up with your email address to receive news and updates.",
    inputFields: ["First name", "Last name", "Email"],
  };

  return <div className="app">{<Header data={data} />}</div>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
