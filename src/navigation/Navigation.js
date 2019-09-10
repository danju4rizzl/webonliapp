import React, { Component } from "react";
import logo from "../logo.svg";
import { Brand, BrandColors, BrandLinks } from "../basics/Basics";
import { Button } from "../components/Button";
import "./Navigation.scss";

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: false };
  }

  toggleClick = () => {
    console.log("Clicked A link");
    // Call a function to change the color by class name
  };

  // ###### Render out links with a loop ######
  renderLinks = () => {
    const links = BrandLinks.map(link => {
      const list = [
        <li key={link}>
          <a
            href="/"
            onClick={this.toggleClick()}
            ref={el => {
              el === "Home" ? console.log(el) : console.log(`not ${el}`);
            }}
          >
            {link}
          </a>
        </li>
      ];

      return list;
    });

    return links;
  };

  render() {
    return (
      <nav className="navigation">
        <div className="navigation__logo">
          <a href="/" className="navigation__logo-item">
            <img src={logo} alt={Brand.siteName} />
          </a>
        </div>
        <div className="navigation__contact">
          <a href="/" className="navigation__contact-link">
            call: {Brand.siteContactNumber}
          </a>
        </div>
        <div className="navigation__links">
          <ul>{this.renderLinks()}</ul>
        </div>

        <div className="navigation__cta">
          <Button backgroundColor={BrandColors.colorBlack} />
        </div>
      </nav>
    );
  }
}

export default Navigation;
