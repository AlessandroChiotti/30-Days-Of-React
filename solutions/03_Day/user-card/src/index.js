import React from "react";
import ReactDOM from "react-dom/client";
import userProfilePicture from "./images/asabeneh.jpg";
import checkMarkIcon from "./images/checkmark.svg";
import clockIcon from "./images/clock-line-icon.svg";

const user = {
  name: "Asabeneh Yetayeh",
  jobTitle: "Senior Developer",
  country: "Finland",
  skills: [
    "HTML",
    "CSS",
    "Sass",
    "Js",
    "React",
    "Redux",
    "Node",
    "MongoDB",
    "Python",
    "Flask",
    "Django",
    "NumPy",
    "Pandas",
    "Data Analysis",
    "MySQL",
    "GraphQL",
    "D3.js",
    "Gatsby",
    "Docker",
    "Heroku",
    "Git",
  ],
};

const skillsFormatted = user.skills.map((skill) => (
  <button disabled className="skillButton">
    {skill}
  </button>
));

const card = (
  <main>
    <div className="main-wrapper">
      <img src={userProfilePicture} alt="" className="userProfilePicture" />
      <h1>
        {user.name} <img src={checkMarkIcon} alt="" className="checkMarkIcon" />
      </h1>
      <h2>
        {user.jobTitle}, {user.country}
      </h2>
      <p>
        <b>skills</b>
      </p>
      <ul className="skills">{skillsFormatted}</ul>
      <footer>
        <img src={clockIcon} alt="" className="clockIcon" />
        Joined on Aug 30, 2020 <br />
      </footer>
    </div>
  </main>
);

const app = <div className="app">{card}</div>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);
