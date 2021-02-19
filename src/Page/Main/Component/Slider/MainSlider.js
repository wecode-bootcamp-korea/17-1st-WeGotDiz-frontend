import React, { Component } from 'react';
import Slider from 'react-slick';
import SLIDERIMG from './MainSliderData';

class MainSlider extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({
      data: SLIDERIMG,
    });
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
    };
    const { data } = this.state;
    return (
      <div class="sliderContainer">
        <Slider {...settings}>
          {data.map((data, index) => {
            return (
              <div className="sliderImg" key={index}>
                <img src={data.img} alt={data.id} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}

export default MainSlider;
