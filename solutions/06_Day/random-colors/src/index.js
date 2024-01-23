import React from "react";
import ReactDOM from "react-dom/client";

const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const titleStyle = {
  "text-align": "center",
  color: "black",
  "font-family": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  "font-size": "50px",
  "font-weight": "lighter",
};

const subtitleStyle = {
  "text-align": "center",
  color: "black",
  "font-family": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  "font-size": "30px",
  "font-weight": "lighter",
};

const tableStyle = {
  "margin-left": "auto",
  "margin-right": "auto",
  width: "50%",
};

const tableDataStyle = {
  "padding-top": "60px",
  "padding-bottom": "60px",
  "padding-left": "30px",
  "padding-right": "30px",
  color: "white",
  "font-family": "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  "font-size": "20px",
};

const CalendarComponent = () => {
  const totalCells = 32;
  const rows = 4;
  const cellsPerRaw = totalCells / rows;

  return (
    <table style={tableStyle}>
      {Array.from({ length: totalCells }, (_, index) => index)
        .reduce((rows, day, index) => {
          if (index % cellsPerRaw === 0) {
            rows.push([]);
          }
          const colorCode = hexaColor();
          rows[rows.length - 1].push(
            <td
              key={colorCode}
              style={{ ...tableDataStyle, "background-color": colorCode }}
            >
              {colorCode}
            </td>
          );
          return rows;
        }, [])
        .map((row, index) => (
          <tr key={index}>{row}</tr>
        ))}
    </table>
  );
};

const Header = ({ title, subtitle }) => {
  return (
    <div className="Header">
      <h1 style={titleStyle}>{title}</h1>
      <h2 style={subtitleStyle}>{subtitle}</h2>
      <CalendarComponent />
    </div>
  );
};

const Main = ({ title, subtitle }) => {
  return (
    <div className="Main">
      <Header title={title} subtitle={subtitle} />
    </div>
  );
};

const App = () => {
  const title = "30 Days Of React";
  const subtitle = "Hexadecimal Colors";
  return (
    <div className="App">
      <Main title={title} subtitle={subtitle} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
