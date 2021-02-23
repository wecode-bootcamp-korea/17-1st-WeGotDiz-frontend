import React, { Component } from 'react';
import MainSlider from './Components/Slider/MainSlider';
import PlanerBar from './Components/Planer/PlanerBar';
import CategoryList from './Components/CategoryList/CategoryList';
import MainProductList from './Components/ProductList/MainProductList';

import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div>
        <MainSlider />
        <PlanerBar />
        <CategoryList />
        {/* <MainProductList /> */}
      </div>
    );
  }
}

export default Main;
