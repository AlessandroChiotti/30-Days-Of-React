import { Component } from "react";
import Header from "./components/header/Header";

class App extends Component {
  title = "30 Days Of React";
  state = {
    styles: {
      position: "absolute",
      left: "0",
      top: "0",
    },
  };

  handleMouseEnter = () => {
    this.setState({
      styles: {
        position: "absolute",
        left: Math.random() * 500 + "px",
        top: Math.random() * 500 + "px",
      },
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          styles={this.state.styles}
          title={this.title}
          handleMouseEnter={this.handleMouseEnter}
        />
      </div>
    );
  }
}

export default App;
