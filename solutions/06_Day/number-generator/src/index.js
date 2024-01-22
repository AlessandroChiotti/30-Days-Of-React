import React from "react";
import ReactDOM from "react-dom/client";

const isPrime = (num) => {
  if (num < 2) return false;

  const divisors = Array.from(
    { length: Math.floor(Math.sqrt(num)) - 1 },
    (_, index) => index + 2
  );

  return divisors.every((divisor) => num % divisor !== 0);
};

const isEven = (num) => num % 2 === 0;

const titleStyle = {
  'text-align': 'center',
  color: 'black',
  'font-family':"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  "font-size": "50px",
};

const subtitleStyle = {
  'text-align': 'center',
  color: 'black',
  'font-family':"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  'font-size': '30px',
}

const tableStyle = {
  'margin-left': 'auto',
  'margin-right': 'auto',
  width: '50%',
};

const tableDataStyle = {
  padding: '50px',
  color: 'white',
  'font-family':"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  'font-size': '30px',
}

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
          const color = isPrime(day) ? "red" : isEven(day) ? "green" : "yellow";
          rows[rows.length - 1].push(
            <td key={day} style={{ ...tableDataStyle, "background-color": color }}>
              {day}
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
  const subtitle = "Number Generator";
  return (
    <div className="App">
      <Main title={title} subtitle={subtitle} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
