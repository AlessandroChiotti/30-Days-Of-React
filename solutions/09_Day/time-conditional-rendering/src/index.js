import React from "react";
import ReactDOM from "react-dom/client";

const MorningComponent = () => {
  return (
    <main>
      <img
        src="https://wallpapers.com/images/high/morning-city-wet-leaves-k94374yvhtgo55wn.webp"
        alt="morning"
      />
    </main>
  );
};

const NoonComponent = () => {
  return (
    <main>
      <img
        src="https://wallpapers.com/images/high/aesthetic-clouds-at-noon-ri8e4shoikuouvgd.webp"
        alt="noon"
      />
    </main>
  );
};

const EveningComponent = () => {
  return (
    <main>
      <img
        src="https://wallpapers.com/images/high/waterfront-walkway-during-evening-6ktxwbjmbe4op49p.webp"
        alt="evening"
      />
    </main>
  );
};

const NightComponent = () => {
  return (
    <main>
      <img
        src="https://wallpapers.com/images/high/city-night-blue-building-dhm1xxj7kc9w1vt7.webp"
        alt="night"
      />
    </main>
  );
};

class App extends React.Component {
  morningHours = [6, 7, 8, 9, 10, 11];
  noonHours = [12, 13, 14, 15, 16];
  eveningHours = [17, 18, 19, 20, 21];
  nightHours = [22, 23, 0, 1, 2, 3, 4, 5];

  hours = new Date().getHours();

  render() {
    if (this.morningHours.includes(this.hours)) {
      return <MorningComponent />;
    }
    if (this.noonHours.includes(this.hours)) {
      return <NoonComponent />;
    }
    if (this.eveningHours.includes(this.hours)) {
      return <EveningComponent />;
    }
    if (this.nightHours.includes(this.hours)) {
      return <NightComponent />;
    }
    throw new Error("Hour not found");
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
