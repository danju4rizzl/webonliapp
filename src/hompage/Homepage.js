import React, { Component } from "react";
import Header from "../sections/Header";
import About from "../sections/About";

export class Homepage extends Component {
  render() {
    return (
      <div>
        <Header />

        <About />
      </div>
    );
  }
}

export default Homepage;
