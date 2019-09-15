import React, { Component } from "react";

import ReactSVG from "react-svg";
import PropTypes from "prop-types";
import "./Bubble.scss";

export class Bubble extends Component {
  static propTypes = {
    color: PropTypes.any.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    const styler = {
      backgroundColor: this.props.color,
      boxShadow: `0px 10px 35px ${this.props.color}`
    };
    return (
      <div style={styler} className="bubble">
        <ReactSVG src={this.props.icon} />
      </div>
    );
  }
}

export default Bubble;
