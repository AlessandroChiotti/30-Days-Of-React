import React from "react";
import ReactDOM from "react-dom/client";

const AutumnComponent = () => {
  return (
    <main>
      <img
        src="https://wallpapers.com/images/hd/autumn-trees-worms-eye-view-n0vgplrhpxhe62gg.webp"
        alt="autumn"
      />
    </main>
  );
};

const WinterComponent = () => {
  return (
    <main>
      <img
        src="https://wallpapers.com/images/hd/mountain-riverside-during-winter-ub7pi6eo4r4tokb5.webp"
        alt="winter"
      />
    </main>
  );
};

const SpringComponent = () => {
  return (
    <main>
      <img
        src="https://wallpapers.com/images/high/spring-season-sunrise-o91jdhw71o6knvy7.webp"
        alt="spring"
      />
    </main>
  );
};

const SummerComponent = () => {
  return (
    <main>
      <img
        src="https://wallpapers.com/images/hd/blue-scenery-summer-klxv6thabah35liq.webp"
        alt="summer"
      />
    </main>
  );
};

class App extends React.Component {
  autumnMonths = [9, 10, 11]; // September, October, November
  winterMonths = [12, 1, 2]; // December, January, February
  springMonths = [3, 4, 5]; // March, April, May
  summerMonths = [6, 7, 8]; // June, July, August

  month = new Date().getMonth() + 1;

  render() {
    console.log(this.month);

    if (this.autumnMonths.includes(this.month)) {
      return <AutumnComponent />;
    } else if (this.winterMonths.includes(this.month)) {
      return <WinterComponent />;
    } else if (this.springMonths.includes(this.month)) {
      return <SpringComponent />;
    } else if (this.summerMonths.includes(this.month)) {
      return <SummerComponent />;
    } else {
      throw new Error("Month not found");
    }
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
