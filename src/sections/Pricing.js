import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import { BrandColors } from "../basics/Basics";
import PriceCard from "../components/PriceCard";
import "./Pricing.scss";

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
  // Debug getSlug()

  renderContents() {
    const element = cardContents.map((item, index) => {
      const createdEl = [
        <Col md={{ span: 4 }} key={index}>
          <PriceCard title={item.plan} price={item.price} slug={item.slug} />
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
            <Row noGutters={false}>{this.renderContents()}</Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Pricing;
