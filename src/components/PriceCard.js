import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { BrandColors } from "../basics/Basics";
import "./PriceCard.scss";

export class PriceCard extends Component {
  static propTypes = {
    title: PropTypes.string,
    slug: "Slugs in Map()"
  };
  state = {
    hover: false
  };

  handleHover = ({ hover }) => {
    this.setState({ hover: !hover });
    console.log(hover);
  };

  handleColor() {
    if (this.props.title === "Standard") {
      return BrandColors.colorPrimaryDark;
    }
  }

  listItem(item) {
    return item.map((item, index) => (
      <li className="price-card__blob" key={index}>
        {item}
      </li>
    ));
  }

  render() {
    return (
      <div className="price-card" onMouseEnter={this.handleHover}>
        <h5 className="price-card__title">{this.props.title}</h5>
        <p className="price-card__price my-3">
          R<span className="price-card__price--sub"> {this.props.price}</span>/
          Month
        </p>

        <ul className="price-card__list list-unstyled">
          {this.listItem(this.props.slug)}
        </ul>

        <Button
          title="Buy Now"
          color={BrandColors.colorBlack}
          backgroundColor={this.handleColor()}
        />
      </div>
    );
  }
}

export default PriceCard;
