import React, { Component } from "react";
import Header from "../sections/Header";
import About from "../sections/About";
import Work from "../sections/Work";

export class Homepage extends Component {
  render() {
    const reminder = ` Danjuma you stoped in Slidz.js trying to fix the slider stying FROM 
  `;
    return (
      <div>
        <Header />
        {console.log(reminder)}
        <About />
        <Work />
      </div>
    );
  }
}

export default Homepage;
