import React, { Component } from 'react';
import MainSlider from './Component/Slider/MainSlider';
import PlanerBar from './Component/Planer/PlanerBar';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div>
        <MainSlider />
        <PlanerBar />
      </div>
    );
  }
}

export default Main;
