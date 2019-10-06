import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { headerText } from "../basics/Basics";
import Button from "../components/Button";
import { BrandColors } from "../basics/Basics";
import { Navigation } from "../navigation/Navigation";
import ReactSVG from "react-svg";

import headerImg from "../img/entrepreneurs.svg";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <header className="header section">
        <Navigation />
        <Container>
          <Row className="header__inner">
            <Col lg={6}>
              <div className="header__inner-left">
                <h1 className="heading__main">
                  {headerText.headingText}
                  <span className="heading__main-sub"> Your Brands</span>
                </h1>
                <p className="text__main">{headerText.headerSlug}</p>
                <Button
                  backgroundColor={BrandColors.colorPrimaryDark}
                  color={BrandColors.colorWhite}
                  title={"Start Here"}
                />
              </div>
            </Col>

            <Col lg={6}>
              <div className="header__inner-right">
                <ReactSVG src={headerImg} className="header__img" />
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}
