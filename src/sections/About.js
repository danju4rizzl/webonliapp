import React from "react";
import Statistics from "../components/Statistics";
import { Container, Row, Col } from "react-bootstrap";
import { BoxTextContents } from "../basics/Basics";
import Box from "../components/Box";
import Services from "../sections/Services";
import ScrollAnimation from "react-animate-on-scroll";

import "./About.scss";

function About() {
  const { box1, box2, box3 } = BoxTextContents;

  return (
    <div className="about ">
      <Container>
        <Row>
          {/* Here We are using span in the colum to controle the role with react-bootstrap it can also take in and offset property */}
          <Col lg={{ span: 6 }}>
            <div className="about__inner-left">
              <ScrollAnimation animateIn="flipInX">
                <Box
                  boxIndex={box1.boxIndex}
                  title={box1.title}
                  text={box1.text}
                  boxClass="box--1"
                />
              </ScrollAnimation>
              <ScrollAnimation animateIn="flipInX">
                <Box
                  boxIndex={box2.boxIndex}
                  title={box2.title}
                  text={box2.text}
                  boxClass="box--2"
                />
              </ScrollAnimation>
              <ScrollAnimation animateIn="flipInX">
                <Box
                  boxIndex={box3.boxIndex}
                  title={box3.title}
                  text={box3.text}
                  boxClass="box--3"
                />
              </ScrollAnimation>
            </div>
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

export default About;
