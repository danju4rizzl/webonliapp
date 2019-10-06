import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Button.scss";

export class Button extends Component {
  static propTypes = {};

  render() {
    const styler = {
      backgroundColor: `#${this.props.backgroundColor}`,
      outline: `1px 5px 5px ${this.props.shadow}`,
      color: `#${this.props.color}`
    };
    return (
      <div className="btn">
        <button className="btn-main" style={styler}>
          {this.props.title}
        </button>
      </div>
    );
  }
}

export default Button;
