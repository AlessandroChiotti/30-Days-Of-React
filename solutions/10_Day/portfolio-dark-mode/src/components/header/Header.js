import { Component } from "react";
import { headerStyle } from "../../styles/header";

class Header extends Component {
  render() {
    console.log(this.props.data);
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
      styles: { backgroundColor, color },
    } = this.props.data;

    return (
      <header
        style={{
          ...headerStyle,
          color,
          ...{
            background:
              backgroundColor !== "white"
                ? backgroundColor
                : headerStyle.background,
          },
        }}
      >
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

export default Header;
