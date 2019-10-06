import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "../components/Button";
import { BrandColors } from "../basics/Basics";
import ScrollAnimation from "react-animate-on-scroll";
import Slidz from "../components/Slidz";
import ReactSVG from "react-svg";
import WorkImage from "../img/investment.svg";

import PropTypes from "prop-types";

import "./Work.scss";

export class Work extends Component {
  static propTypes = {};

  render() {
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

                  <h3 className="heading__main">
                    Check some of our
                    <span className="heading__main-sub">featured work</span>
                  </h3>
                </div>
              </Col>
              <Col>
                <div className="work__top__btn-box">
                  <Button
                    backgroundColor={BrandColors.colorPrimary}
                    shadow={BrandColors.colorPrimaryDark}
                    color={BrandColors.colorWhite}
                    title={"View Gallery"}
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className="work__middle">
          <Slidz />
        </div>

        <div className="work__bottom ">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="work__bottom--left">
                  <ReactSVG src={WorkImage} className="work__bottom-img" />
                </div>
              </Col>
              <Col lg={{ span: 5, offset: 1 }}>
                <div className="work__bottom--right">
                  <div className="work__bottom__text-box">
                    <h2 className="heading__section heading__section--services">
                      start with us
                    </h2>

                    <h3 className="heading__main">
                      Is your site driving
                      <span className="heading__main-sub text-dark">
                        sale of
                        <span className="heading__main-sub--inherited">
                          business?
                        </span>
                      </span>
                    </h3>
                    <p className="text__main">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Maiores velit fugiat doloribus harum eveniet nihil cumque
                      dolorum aliquam amet, illo dolorem neque obcaecati ipsam
                      sint.
                    </p>
                    <Button
                      backgroundColor={BrandColors.colorWhite}
                      title="Let's Work"
                      color={BrandColors.colorPrimary}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Work;
