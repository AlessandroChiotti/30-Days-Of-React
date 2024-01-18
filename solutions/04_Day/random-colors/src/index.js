import React from "react";
import ReactDOM from "react-dom/client";

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const BoxComponent = ({ colorCode }) => (
  <div
    style={{
      background: colorCode,
    }}
  >
    {colorCode}
  </div>
);

const numberOfTimes = 5;

const Main = () => (
  <main>
    {Array.from({ length: numberOfTimes }).map(() => (
      <BoxComponent colorCode={hexaColor()} />
    ))}
  </main>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
