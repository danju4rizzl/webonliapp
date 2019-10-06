import React, { Component } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col, ButtonGroup } from "react-bootstrap";
import Button from "../components/Button";
import { BrandColors, getContent } from "../basics/Basics";
import Price_card from "../components/Price_card";

const cardContents = [
  {
    plan: "Basic",
    price: "2760",
    slug: [
      "3 pager website",
      "Responsive",
      "Google Maps",
      "Mockup",
      "Source file",
      "Client Support"
    ]
  },
  {
    plan: "Standard",
    price: "4000",
    slug: [
      "5 pager website",
      "Responsive",
      "Google Maps",
      "Mockup",
      "Source file",
      "Client Support",
      "Customization",
      "Hosting"
    ]
  },
  {
    plan: "Premium",
    price: "1128",
    slug: [
      "10 pager website",
      "Responsive",
      "Google Maps",
      "Mockup",
      "Source file",
      "Client Support",
      "Customization",
      "Hosting",
      "PWA",
      "E-commerce"
    ]
  }
];

export class Pricing extends Component {
  static propTypes = {};
  getSlug(item) {
    return item.map(item => item);
  }
  renderContents() {
    const element = cardContents.map(item => {
      const createdEl = [
        <Col md={{ span: 3, offset: 1 }}>
          <Price_card title={item.plan} price={item.price} slug={item.slug} />
        </Col>
      ];

      return createdEl;
    });
    return element;
  }

  render() {
    return (
      <div className="pricing">
        <div className="pricing__inner">
          <Container>
            <div className="pricing__inner-box text-center">
              <h1 className="heading__main">
                We have best &amp; affordable
                <span className="heading__main-sub"> pricing plans</span>
              </h1>
              <div className="btn-container  my-5">
                <Button
                  title="Monthly"
                  backgroundColor={BrandColors.colorPrimary}
                />
                <Button title="Yearly" color={BrandColors.colorPrimary} />
              </div>
            </div>
            <Row noGutters={true}>{this.renderContents()}</Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Pricing;
