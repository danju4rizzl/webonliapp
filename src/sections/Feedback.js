import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import Button from '../components/Button';
import { BrandColors } from '../basics/Basics';
import './Feedback.scss';

const axios = require('axios').default;
const setting = {
  fade: true,
  indicators: false,
  controls: false
};

const testimonials = [
  {
    clientImg: 'https://randomuser.me/api/portraits/men/32.jpg',
    clientBlob: 'The best web design team I am worked with ',
    clientName: 'Mike Jones',
    clientPosition: 'Chife Executive Officer'
  },
  {
    clientImg: 'https://randomuser.me/api/portraits/women/44.jpg',
    clientBlob: 'The team we love ',
    clientName: 'Jane Jones',
    clientPosition: 'Manager'
  }
];
const APIkey = '0db8bde372cd905354ad98e542f05c';

const renderFeedbacks = () => {
  //1. Get user images from an API
  //2. Add images to UI
  const element = testimonials.map((item, index) => {
    //
    const TestCard = [
      <Carousel.Item key={index}>
        <div className="feedback-card">
          <div className="feedback-card__img ">
            <img
              src={item.clientImg}
              alt={item.clientName}
              srcSet={item.clientImg}
              className="img-fluid "
            />
          </div>

          <p className="feedback-card__slug text-center my-5">
            {item.clientBlob}
          </p>

          <h5 className="feedback-card__name font-weight-bold ">
            {item.clientName}
          </h5>
          <p className="text__main my-2">{item.clientPosition}</p>
        </div>
      </Carousel.Item>
    ];
    return TestCard;
  });

  // API
  /*
  this.getImages(async () => {
    const result = await axios(`https://uifaces.co/api/?limit=3${APIkey}`);
    console.log(result);
  });
  
  const dataObj = fetch('https://jsonplaceholder.typicode.com/todos/1', {
    method: 'GET',
    headers: {
      'X-API-KEY': [APIkey],
      Accept: 'application/json',
      'Cache-Control': 'no-cache'
    }
  })
  .then(response => response.json())
  .then(json => console.log(json));
  */

  // Make a request for a user with a given ID
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function(response) {
      // handle success
      console.log(response);
    })
    .catch(function(error) {
      // handle error
      console.log(error);
    })
    .finally(function() {
      // always executed
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
              <Carousel {...setting}>{renderFeedbacks()}</Carousel>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
