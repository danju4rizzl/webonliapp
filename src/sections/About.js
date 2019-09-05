import React from "react";
import Statistics from "../components/Statistics";
import { Container, Row, Col } from "react-bootstrap";

import "./About.scss";

function About() {
  return (
    <div className="about section">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="about__inner-left">
              <div className="steps steps--1">
                <h3 className="heading__sub">1</h3>
                <h4 className="heading__title">Professional support</h4>
                <p className="text__main">
                  Danjuma You stoped here bro, Thank God, for making it this
                  far.... Jesus is the Lamb, no amnisia
                </p>
              </div>
            </div>
          </Col>

          <Col lg={5}>
            <h2 className="heading__section">About us</h2>
            <div className="about__inner-right">
              <div className="about__inner-right__heading">
                <h1 className="heading__main">We are the best in you city</h1>
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
    </div>
  );
}

export default About;
