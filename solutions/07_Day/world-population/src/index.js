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

const histogramStyle = (
  computePercentage,
  population,
  tenHighestPopulation
) => {
  const width = "6";
  return {
    borderLeft: `${
      computePercentage(population, tenHighestPopulation[0].population) * width
    }px solid orange`,
  };
};

const HistogramComponent = ({
  computePercentage,
  population,
  tenHighestPopulation,
}) => {
  return (
    <td
      style={histogramStyle(
        computePercentage,
        population,
        tenHighestPopulation
      )}
    ></td>
  );
};

class WorldPopulationTable extends React.Component {
  render() {
    const { tenHighestPopulation, computePercentage } = this.props;
    return (
      <table style={tableStyle}>
        <tbody>
          {tenHighestPopulation.map(({ country, population }) => {
            return (
              <tr key={country}>
                <td style={tableDataStyle}>{country.toUpperCase()}</td>
                <HistogramComponent
                  computePercentage={computePercentage}
                  population={population}
                  tenHighestPopulation={tenHighestPopulation}
                />
                <td style={tableDataStyle}>
                  {population.toLocaleString("en", { useGrouping: true })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

class Header extends React.Component {
  render() {
    const { title, header, subHeader } = this.props;
    return (
      <header>
        <h1 style={titleStyle}>{title}</h1>
        <h2 style={headerStyle}>{header}</h2>
        <h3 style={subHeaderStyle}>{subHeader}</h3>
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
    const {
      title,
      header,
      subHeader,
      tenHighestPopulation,
      computePercentage,
    } = this.props.data;
    return (
      <div>
        <Header title={title} header={header} subHeader={subHeader} />
        <WorldPopulationTable
          tenHighestPopulation={tenHighestPopulation}
          computePercentage={computePercentage}
        />
      </div>
    );
  }
}

class App extends React.Component {
  computePercentage(num, total) {
    return (num / total) * 100;
  }

  render() {
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
      computePercentage: this.computePercentage,
    };

    return <Main data={data} />;
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
