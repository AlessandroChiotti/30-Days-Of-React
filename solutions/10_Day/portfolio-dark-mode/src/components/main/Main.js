import { Component } from "react";
import TechList from "../tech-list/TechList";
import UserCard from "../user-card/UserCard";
import { buttonStyles } from "../../styles/button";
import { mainWrapperStyle } from "../../styles/main";

class Main extends Component {
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
          <button style={buttonStyles} onClick={greetPeople}>
            Greet People
          </button>
          <button style={buttonStyles} onClick={handleTime}>
            Show Time
          </button>
          <button style={buttonStyles} onClick={changeBackground}>
            Change Background
          </button>
        </div>
      </main>
    );
  }
}

export default Main;
