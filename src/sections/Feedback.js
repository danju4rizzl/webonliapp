import React, { Component } from "react";
// import PropTypes from 'prop-types'
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Button from "../components/Button";

import { BrandColors } from "../basics/Basics";
import "./Feedback.scss";

const setting = {
  fade: true,
  indicators: false,
  controls: false
};

const renderFeedbacks = () => {
  //1. Get user images from an API
  //2. Add images to UI
};

export default class Feedback extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }

  render() {
    return (
      <div className="feedback">
        <Container>
          <Row>
            <Col md={{ span: 5, offset: 2 }}>
              <h2 className="heading__section heading__section-- ">Feedback</h2>
              <div className="about__inner-right">
                <h1 className="heading__main">
                  Clients give us
                  <span className="heading__main-sub">Excelent quoutes</span>
                </h1>
              </div>

              <p className="text__main">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores velit fugiat doloribus harum eveniet nihil cumque
                dolorum aliquam.
              </p>

              <p className="text__main font-weight-bolder">
                Do you have any questions about anything
              </p>
              <Button
                backgroundColor={BrandColors.colorWhite}
                title="Contact us"
                color={BrandColors.colorPrimary}
              />
            </Col>

            <Col md={{ span: 5 }}>
              <Carousel {...setting}>
                {renderFeedbacks}
                {/* <Carousel.Item >
                  <div className="feedback-card">
                    <div className="feedback-card__img ">
                      <img
                        src="dj.jpg"
                        alt="Danjuma Ashiwaju"
                        srcset=""
                        className="img-fluid "
                      />
                    </div>

                    <p className="feedback-card__slug text-center my-5">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Placeat nobis dolor minima eos repudiandae sed aperiam a
                      mollitia? Odit, et.
                    </p>

                    <h5 className="feedback-card__name font-weight-bold ">
                      Danjuma Ahiwaju
                    </h5>
                    <p className="text__main my-2">
                      Founder and ceo of Comfixx
                    </p>
                  </div>
                </Carousel.Item> */}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
