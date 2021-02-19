import React, { Component } from 'react';
import MainSlider from './Component/Slider/MainSlider';
import PlanerBar from './Component/Planer/PlanerBar';
import CategoriList from './Component/CategoriList/CategoriList';
import MainProductList from './Component/ProductList/MainProductList';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div>
        <MainSlider />
        <PlanerBar />
        <CategoriList />
        <MainProductList />
      </div>
    );
  }
}

export default Main;
