import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from '../components/Button';
import { BrandColors } from '../basics/Basics';
import './Feedback.scss';

const axios = require('axios').default;
const setting = {
  indicators: false,
  controls: false
};

// const APIkey = '0db8bde372cd905354ad98e542f05c';
const testimonials = [
  {
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    blob:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto animi quos non dolore omnis, magni fugit tenetur voluptatum accusamus!',
    name: 'Leo Gill',
    position: 'Chife Executive Officer'
  },
  {
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    blob:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto animi quos non dolore omnis, magni fugit tenetur voluptatum accusamus!',
    name: 'Lana Steiner',
    position: 'Manager'
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/4.jpg',
    blob:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores odit maxime illum veritatis facere illo excepturi nam suscipit molestias rerum. ',
    name: 'Aaron Nunez',
    position: 'Manager'
  }
];

const getUsers = () => {
  // Make a request for a user with a given ID
  axios
    .get('https://uifaces.co/api')
    .then(res => console.log(res))
    .catch(err => console.error(err));
};

const renderFeedbacks = () => {
  //1. Get user images from an API
  getUsers();
  //2. Add images to UI
  const element = testimonials.map((item, index) => {
    //
    const TestCard = [
      <Carousel.Item key={index}>
        <div className="feedback-card">
          <div className="feedback-card__img ">
            <img
              src={item.photo}
              alt={item.name}
              srcSet={item.photo}
              className="img-fluid "
            />
          </div>

          <p className="feedback-card__slug text-center my-5">{item.blob}</p>

          <h5 className="feedback-card__name font-weight-bold ">{item.name}</h5>
          <p className="text__main my-2">{item.position}</p>
        </div>
      </Carousel.Item>
    ];
    return TestCard;
  });

  return element;
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
            <Col className="feedback__content" md={{ span: 5, offset: 2 }}>
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
              <Carousel {...setting}>{renderFeedbacks()}</Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
