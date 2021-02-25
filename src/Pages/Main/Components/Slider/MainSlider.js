import React, { Component } from 'react';
import Slider from 'react-slick';
import SLIDERIMG from './MainSliderData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      draggable: true,
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
