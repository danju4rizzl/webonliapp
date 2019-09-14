import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Bubble from "../components/Bubble";
import research from "../img/research.svg";
import robot from "../img/robot.svg";
import programming from "../img/programming.svg";

import "./Services.scss";
import { red } from "ansi-colors";

export class Services extends Component {
  render() {
    return (
      <div className="services">
        <Container>
          <div className="services__inner">
            <div className="services__inner__header-box">
              <h2 className="heading__section heading__section--services">
                Our services
              </h2>
              <h1 className="heading__main">
                We provide superior
                <span className="heading__main-sub"> range of services</span>
              </h1>
            </div>
            <Row>
              <Col md={4}>
                <div className="services__card">
                  <Bubble color="#3ad1be" icon={research} />
                  <div className="services__card__text-box">
                    <h5 className="heading__card">{"SEO services"}</h5>
                    <p className="text__main">
                      {
                        "Leverage agile rameworks to provide a robust synopsis for high level overviews."
                      }
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="services__card">
                  <Bubble color="#705ECE" icon={robot} />
                  <div className="services__card__text-box">
                    <h5 className="heading__card">{"Chatbot integration"}</h5>
                    <p className="text__main">
                      {
                        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Capitalize on low hanging fruit to identify a ballpark value added activity to beta test"
                      }
                    </p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="services__card">
                  <Bubble color="#D13A7F" icon={programming} />
                  <div className="services__card__text-box">
                    <h5 className="heading__card">{"Web development"}</h5>
                    <p className="text__main">
                      {
                        "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.clickthroughs from DevOps"
                      }
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}

export default Services;
