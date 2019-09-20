import React, { Component } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import ReactSVG from "react-svg";

import "react-multi-carousel/lib/styles.css";
import "./Slidz.scss";

import img1 from "../img/seo.svg";
import img2 from "../img/team.svg";
import img3 from "../img/designer.svg";

/* TODO
1. Import svg icons using react-svg *Done
2. Store all images, text, title in an array as seen in multi carousel sandbox ie-- (REMEMBER TO STORE ALL THE TEXT for THE COMPONENT IN an array inside the component)*Done
3. Loop trough the stored images inside renderSlides() method *Done
4. Add styles  Done # without dash besides the text

5. Fix Animation
*/
const allBoxes = [
  { title: "SEO Optimization ", tag: "Sales Awareness", img: img1 },
  { title: "Web Consultancy ", tag: "Brain Storming", img: img2 },
  { title: "Cybersecurity", tag: " IoT", img: img1 },
  { title: "UX/ UI Design", tag: "Sales Awareness", img: img3 },
  { title: "Strategy ", tag: "Sales Awareness", img: img3 },
  { title: "Blockchain", tag: " IoT", img: img2 },
  { title: "Mobile App Develpments ", tag: "Sales Awareness", img: img3 }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
// Whats left to do is to change the component name from Slidz then import it where needed

export class Slidz extends Component {
  static propTypes = {
    // Using proptypes as a reminder
    title: PropTypes.string.isRequired,
    tag: PropTypes.string
  };

  renderSlides = () => {
    const element = allBoxes.map(item => {
      const createdEl = [
        <div className="slide" key={item.lenght}>
          <ReactSVG src={item.img} className="slide__img" />
          <h5 className="heading__card heading__card--projects">
            {item.title}
          </h5>
          <p className="tag  text-white">{item.tag}</p>
        </div>
      ];

      return createdEl;
    });
    return element;
  };

  render() {
    const styler = {};

    return (
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={false}
        arrows={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={false}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={this.props.deviceType}
        centerMode={true}
      >
        {this.renderSlides()}
      </Carousel>
    );
  }
}

export default Slidz;
