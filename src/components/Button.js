import React, { Component } from "react";
import "./Button.scss";

export class Button extends Component {
  render() {
    const styler = {
      backgroundColor: `#${this.props.backgroundColor}`,
      boxShadow: `1px 5px 5px ${this.props.shadow}`
    };
    return (
      <div className="btn">
        <button className="btn-main" style={styler}>
          Start now
        </button>
      </div>
    );
  }
}

export default Button;
