import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "../components/Button";
import { BrandColors } from "../basics/Basics";
import "./Price_card.scss";

export class Price_card extends Component {
  static propTypes = {};
  handleColor() {
    if (this.props.title === "Standard") {
      return BrandColors.colorPrimaryDark;
    }
  }

  render() {
    return (
      <div className="price-card">
        <h5 className="price-card__title">{this.props.title}</h5>
        <p className="price-card__price my-3">
          $<span className="price-card__price--sub"> {this.props.price}</span>
          /Month
        </p>

        <p className="price-card__blob">{this.props.blob}</p>

        <Button
          title="Buy Now"
          color={BrandColors.colorBlack}
          backgroundColor={this.handleColor()}
        />
      </div>
    );
  }
}

export default Price_card;
