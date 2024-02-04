import React from "react";
import ReactDOM from "react-dom/client";

class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // Size of the enclosing square
    const sqSize = this.props.sqSize;
    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (this.props.sqSize - this.props.strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = dashArray - (dashArray * this.props.percentage) / 100;

    return (
      <svg
        width={this.props.sqSize}
        height={this.props.sqSize}
        viewBox={viewBox}
      >
        <circle
          className="circle-background"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
        />
        <circle
          className="circle-progress"
          cx={this.props.sqSize / 2}
          cy={this.props.sqSize / 2}
          r={radius}
          strokeWidth={`${this.props.strokeWidth}px`}
          // Start progress marker at 12 O'Clock
          transform={`rotate(-90 ${this.props.sqSize / 2} ${
            this.props.sqSize / 2
          })`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          className="circle-text"
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
        >
          {`${this.props.percentage}%`}
        </text>
      </svg>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 200,
  percentage: 0,
  strokeWidth: 10,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      percentage: 0,
      intervalId: null,
      isDownloading: false,
    };

    this.handleDownload = this.handleDownload.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleDownload() {
    if (this.state.isDownloading) {
      return;
    }

    const timeout = 100;

    const intervalId = setInterval(() => {
      if (this.state.percentage <= 100)
        this.setState({
          percentage: this.state.percentage + 1,
        });
      else {
        clearInterval(intervalId); // Stop the interval when percentage reaches 100
        this.setState({
          isDownloading: false,
        });
      }
    }, timeout);

    // Store the intervalId in state
    this.setState({
      intervalId: intervalId,
      isDownloading: true,
    });
  }

  handleStop() {
    clearInterval(this.state.intervalId);
    this.setState({
      isDownloading: false,
    });
  }

  handleReset() {
    this.handleStop();
    this.setState({
      percentage: 0,
    });
  }

  render() {
    return (
      <div className="app">
        <CircularProgressBar
          strokeWidth="10"
          sqSize="200"
          percentage={this.state.percentage}
        />
        <div>
          <button onClick={this.handleDownload}>Download</button>
          <button onClick={this.handleStop}>Stop</button>
          <button onClick={this.handleReset}>Reset</button>
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
