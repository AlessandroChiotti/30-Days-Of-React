// index.js
import React from "react";
import ReactDOM from "react-dom";
import { countriesData } from "./data/countries";

// User Card Component
const CountryCard = ({
  country: { name, capital, languages, population, flag, currency },
}) => (
  <div className="user-card">
    <div className="user-card-picture">
      <img src={flag} alt={name} />
      <h2>{name}</h2>
    </div>
    <ul>
      <li>Capital: {capital}</li>
      <li>Language: {languages[0]}</li>
      <li>Population: {population}</li>
      <li>Currency: {currency}</li>
    </ul>
  </div>
);

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props);
    // the code inside the constructor run before any other code
  }
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      purpose,
    } = this.props.data;

    return (
      <header style={this.props.styles}>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
          <p>{purpose}</p>
        </div>
      </header>
    );
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { selectRandomCountry, country } = this.props;
    return (
      <main>
        <div className="main-wrapper">
          <CountryCard country={country} />
          <Button
            text="Select Country"
            onClick={selectRandomCountry}
            style={buttonStyles}
          />
        </div>
      </main>
    );
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer>
        <div className="footer-wrapper">
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  state = {
    country: countriesData[0],
  };

  selectRandomCountry = () => {
    this.setState({ country: countriesData[Math.floor(Math.random() * 250)] });
  };

  render() {
    const data = {
      welcome: "30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      purpose: "Select a country for your next holiday",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };
    const date = new Date();

    return (
      <div className="app">
        <Header data={data} />
        <Main
          selectRandomCountry={this.selectRandomCountry}
          country={this.state.country}
        />
        <Footer date={date} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
