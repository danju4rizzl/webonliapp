import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import { BrandColors } from "../basics/Basics";
import ScrollAnimation from "react-animate-on-scroll";
import Slidz from "../components/Slidz";

import PropTypes from "prop-types";

import "./Work.scss";

export class Work extends Component {
  static propTypes = {};

  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className="work">
        <div className="work__top">
          <Container>
            <Row>
              <Col lg={{ span: 8 }}>
                <div className="work__top__text-box">
                  <h2 className="heading__section heading__section--services">
                    OUR WORKS
                  </h2>

                  <h1 className="heading__main">
                    Check some of our
                    <span className="heading__main-sub">featured work</span>
                  </h1>
                </div>
              </Col>
              <Col>
                <div className="work__top__btn-box">
                  <Button
                    backgroundColor={BrandColors.colorPrimary}
                    shadow={BrandColors.colorPrimaryDark}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="work__bottom">
          <Slidz />
        </div>
      </div>
    );
  }
}

export default Work;
