import { Component } from "react";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Header from "./components/header/Header";
import asabenehImage from "./assets/asabeneh.jpg";

class App extends Component {
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

export default App;
