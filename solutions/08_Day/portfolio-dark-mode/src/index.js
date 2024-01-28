import React from "react";
import ReactDOM from "react-dom/client";
import asabenehImage from "./images/asabeneh.jpg";

const userCardStyle = {
  width: "20%",
  borderRadius: "50%",
};

const mainWrapperStyle = {
  paddingLeft: "100px",
  fontFamily: "sans-serif",
  paddingTop: "20px",
  paddingBottom: "30px",
};

const headerStyle = {
  paddingLeft: "100px",
  fontFamily: "sans-serif",
  background: "#61dbfb",
  marginBottom: "2px",
  paddingBottom: "20px",
  paddingTop: "20px",
};

const footerStyle = {
  fontFamily: "sans-serif",
  fontWeight: "300",
  fontSize: "14px",
  textAlign: "center",
  background: "#61dbfb",
  position: "absolute",
  bottom: "0",
  left: "0",
  width: "100%",
  paddingTop: "20px",
};

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} style={userCardStyle} />
    <h2>
      {firstName}
      {lastName}
    </h2>
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
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      styles: { backgroundColor, color },
    } = this.props.data;

    return (
      <header
        style={{
          ...headerStyle,
          color,
          ...{
            background:
              backgroundColor !== "white"
                ? backgroundColor
                : headerStyle.background,
          },
        }}
      >
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

// TechList Component
// class base component
class TechList extends React.Component {
  render() {
    const { techs } = this.props;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      styles: { backgroundColor, color },
    } = this.props;
    return (
      <main style={{ background: backgroundColor, color }}>
        <div className="main-wrapper" style={mainWrapperStyle}>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text="Greet People"
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
          <Button
            text="Change Background"
            onClick={changeBackground}
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
  render() {
    const {
      date,
      styles: { backgroundColor, color },
    } = this.props;
    return (
      <footer
        style={{
          ...footerStyle,
          color,
          ...{
            background:
              backgroundColor !== "white"
                ? backgroundColor
                : headerStyle.background,
          },
        }}
      >
        <div className="footer-wrapper">
          <p>Copyright {date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

class App extends React.Component {
  defaultBackground = "white";
  darkModeBackground = "#00162A";
  defaultColor = "black";
  darkModeColor = "white";

  defaultStyles = {
    backgroundColor: this.defaultBackground,
    color: this.defaultColor,
  };

  darkModeStyles = {
    backgroundColor: this.darkModeBackground,
    color: this.darkModeColor,
  };

  state = {
    styles: this.defaultStyles,
  };
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };
  isDefaultStylesSet = () => {
    return (
      this.state.styles.backgroundColor === this.defaultBackground &&
      this.state.styles.color === this.defaultColor
    );
  };
  changeBackground = () => {
    return this.isDefaultStylesSet()
      ? this.setState({
          styles: this.darkModeStyles,
        })
      : this.setState({
          styles: this.defaultStyles,
        });
  };
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
      styles: this.state.styles,
    };
    const techs = ["HTML", "CSS", "JavaScript"];
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: asabenehImage };

    return (
      <div className="app">
        {this.state.backgroundColor}
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          styles={data.styles}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
        />
        <Footer date={new Date()} styles={data.styles} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
