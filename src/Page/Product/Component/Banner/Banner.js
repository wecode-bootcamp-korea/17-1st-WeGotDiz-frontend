import React, { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
  render() {
    const { bannerData } = this.props;

    return (
      <div className="banner">
        <p className="category">{bannerData.category}</p>
        <p className="productTtile">{bannerData.productTtile}</p>
        <div className="titleBackground" />
      </div>
    );
  }
}

export default Banner;
