import React, { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
  render() {
    const { thumbnail_url, category, title } = this.props.productData;

    return (
      <div className="banner" style={{ backgroundImage: URL(thumbnail_url) }}>
        <p className="category">{category}</p>
        <p className="productTtile">{title}</p>
        <div className="titleBackground" />
      </div>
    );
  }
}

export default Banner;
