import React from "react";
import ReactDOM from "react-dom/client";

const titleStyle = {
  textAlign: "center",
  color: "black",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontSize: "50px",
  fontWeight: "lighter",
};

const headerStyle = {
  textAlign: "center",
  color: "black",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontSize: "30px",
  fontWeight: "lighter",
};

const subHeaderStyle = {
  textAlign: "center",
  color: "black",
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontSize: "15px",
  fontWeight: "lighter",
};

const tableDataStyle = {
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  fontSize: "20px",
};

const tableStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  width: "50%",
};

const histogramStyle = (population, tenHighestPopulation) => {
  const width = "600";
  return {
    borderLeft: `${
      (population / tenHighestPopulation[0].population) * width
    }px solid orange`,
  };
};

const Header = ({ data }) => {
  const { title, header, subHeader, tenHighestPopulation } = data;
  return (
    <header>
      <h1 style={titleStyle}>{title}</h1>
      <h2 style={headerStyle}>{header}</h2>
      <h3 style={subHeaderStyle}>{subHeader}</h3>
      <table style={tableStyle}>
        <tbody>
          {tenHighestPopulation.map(({ country, population }) => {
            return (
              <tr key={country}>
                <td style={tableDataStyle}>{country.toUpperCase()}</td>
                <td
                  style={histogramStyle(population, tenHighestPopulation)}
                ></td>
                <td style={tableDataStyle}>
                  {population.toLocaleString("en", { useGrouping: true })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </header>
  );
};

const Main = ({ data }) => (
  <div>
    <Header data={data} />
  </div>
);

const App = () => {
  const tenHighestPopulation = [
    { country: "World", population: 7693165599 },
    { country: "China", population: 1377422166 },
    { country: "India", population: 1295210000 },
    { country: "USA", population: 323947000 },
    { country: "Indonesia", population: 258705000 },
    { country: "Brazil", population: 206135893 },
    { country: "Pakistan", population: 194125062 },
    { country: "Nigeria", population: 186988000 },
    { country: "Bangladesh", population: 161006790 },
    { country: "Russia", population: 146599183 },
    { country: "Japan", population: 126960000 },
  ];

  const data = {
    title: "30 Days Of React",
    header: "World population",
    subHeader: "Ten most populated countries",
    tenHighestPopulation,
  };
  return <Main data={data} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
