import { Component } from "react";
import { footerStyle } from "../../styles/footer";

class Footer extends Component {
  render() {
    const {
      date,
      styles: { backgroundColor, color },
    } = this.props;
    return (
      <footer
        style={{
          ...footerStyle,
          color,
          ...{
            background:
              backgroundColor !== "white"
                ? backgroundColor
                : footerStyle.background,
          },
        }}
      >
        <div className="footer-wrapper">
          <p>Copyright {date.getFullYear()}</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
