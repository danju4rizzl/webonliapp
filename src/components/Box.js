import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Box.scss";

export class Box extends Component {
  static propTypes = {
    boxIndex: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    // Created a box class to add and extra dynamic class in to overide speciticity
    boxClass: PropTypes.string
  };

  render() {
    return (
      <div className={`box ${this.props.boxClass}`}>
        <h3 className="box__heading">{this.props.boxIndex}</h3>
        <h4 className="box__title">{this.props.title}</h4>
        <p className="box__text">{this.props.text}</p>
      </div>
    );
  }
}

export default Box;
