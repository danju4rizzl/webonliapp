import React, { Component } from "react";
import Header from "../sections/Header";
import About from "../sections/About";
import Work from "../sections/Work";
import Pricing from "../sections/Pricing";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />
        <About />
        <Work />
        <Pricing/>
      </div>
    );
  }
}

export default Homepage;
