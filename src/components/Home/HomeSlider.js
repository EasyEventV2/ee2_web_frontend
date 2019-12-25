import React, { Component } from 'react';
import Slider from 'react-slick';

export default class HomeSlider extends Component {
  render() {
    return (
      <Slider
        className="center"
        arrows
        dots
        centerMode
        infinite
        centerPadding="60px"
        slidesToShow={3}
        speed={500}
      >
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    );
  }
}
