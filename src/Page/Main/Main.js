import React, { Component } from 'react';
import MainSlider from './Components/Slider/MainSlider';
import PlanerBar from './Components/Planer/PlanerBar';
import CategoriList from './Components/CategoriList/CategoriList';
import MainProductList from './Components/ProductList/MainProductList';

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
