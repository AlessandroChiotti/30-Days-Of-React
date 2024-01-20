import React from "react";
import ReactDOM from "react-dom/client";
import userProfilePicture from "./images/asabeneh.jpg";
import checkMarkIcon from "./images/checkmark.svg";
import clockIcon from "./images/clock-line-icon.svg";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

const SkillsComponent = ({ skills }) => (
  <div>
    {" "}
    <p>
      <b>skills</b>
    </p>
    <ul className="skills">
      {skills.map((skill) => (
        <button disabled className="skill-button">
          {skill}
        </button>
      ))}
    </ul>
  </div>
);

const FooterComponent = ({ joinDate }) => (
  <footer>
    <img src={clockIcon} alt="" className="clock-icon" />
    Joined on {showDate(joinDate)} <br />
  </footer>
);

const VerifiedUserComponent = ({ name }) => (
  <div>
    {name}
    <img src={checkMarkIcon} alt="verifiedUser" className="check-mark-icon" />
  </div>
);

const CardComponent = ({ user }) => {
  const { name, jobTitle, country, skills, userProfilePicture, joinDate } =
    user;
  return (
    <main>
      <div className="main-wrapper">
        <img src={userProfilePicture} alt="" className="user-profile-picture" />
        <h1>
          <VerifiedUserComponent name={name} />
        </h1>
        <h2>
          {jobTitle}, {country}
        </h2>
        <SkillsComponent skills={skills} />
        <FooterComponent joinDate={joinDate} />
      </div>
    </main>
  );
};

const App = () => {
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
    userProfilePicture,
    joinDate: new Date("2020-08-30"),
  };
  return (
    <div className="app">
      <CardComponent user={user} />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
