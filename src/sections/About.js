import React, { Component } from "react";
import PropTypes from "prop-types";
import Statistics from "../components/Statistics";
import { Container, Row, Col } from "react-bootstrap";
import { BoxTextContents } from "../basics/Basics";
import Box from "../components/Box";
import Services from "../sections/Services";
import ScrollAnimation from "react-animate-on-scroll";

import "./About.scss";

const boxContents = [
  {
    boxIndex: 1,
    title: "agile development",
    text:
      "minima maxime alias cupiditate ea reprehenderit. Facere reprehenderit accusamuor."
  },
  {
    boxIndex: 2,
    title: "FullStack Developers",
    text:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews."
  },
  {
    boxIndex: 3,
    title: "professional  Response",
    text:
      "We capitalize on low hanging fruit to identify value added activity to beta test. "
  }
];

const boxItem = item => {
  const createdEl = [
    <ScrollAnimation animateIn="flipInX">
      <Box boxIndex={item.boxIndex} title={item.title} text={item.text} />
    </ScrollAnimation>
  ];
  return createdEl;
};

export class About extends Component {
  static propTypes = {};

  renderBoxes = () => {
    const box = boxContents.map(boxItem);

    return box;
  };

  render() {
    return (
      <div className="about ">
        <Container>
          <Row>
            {/* Here We are using span in the colum to controle the role with react-bootstrap it can also take in and offset property */}
            <Col lg={{ span: 6 }}>
              <div className="about__inner-left">{this.renderBoxes()}</div>
            </Col>

            <Col lg={{ span: 5 }}>
              <h2 className="heading__section heading__section--about ">
                About us
              </h2>
              <div className="about__inner-right">
                <div className="about__inner-right__heading">
                  <h1 className="heading__main">
                    We are the best
                    <span className="heading__main-sub">in you city</span>
                  </h1>
                </div>

                <div className="about__inner-right__text">
                  <p className="text__main">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                    tempora, minus obcaecati vel soluta voluptate blanditiis
                    minima maxime alias cupiditate ea reprehenderit. Facere
                    reprehenderit accusamus eaque hic tempora maxime dolor.
                  </p>
                </div>
                <Statistics />
              </div>
            </Col>
          </Row>
        </Container>
        <Services />
      </div>
    );
  }
}

export default About;
