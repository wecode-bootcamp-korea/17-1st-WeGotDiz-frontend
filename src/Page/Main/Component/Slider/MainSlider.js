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
      // arrows: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 300,
      // centerMode: true,
      lazyLoad: true,
      // appendDots: dots => <div style={{ color: 'red' }}>{dots}</div>,
    };
    const { data } = this.state;
    return (
      <>
        <div class="sliderContainer">
          <Slider {...settings}>
            {data.map(data => {
              return (
                <div className="sliderImg">
                  <img src={data.img} alt="상품배너사진" key={data.id} />
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}

export default MainSlider;
