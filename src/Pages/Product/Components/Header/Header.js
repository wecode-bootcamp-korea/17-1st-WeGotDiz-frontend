import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
  render() {
    const { thumbnail_url, category, title } = this.props.productData;

    return (
      <div
        className="header"
        style={{ backgroundImage: `url(${thumbnail_url})` }}
      >
        <p className="category">{category}</p>
        <h1 className="productTtile">{title}</h1>
        <div className="image" />
      </div>
    );
  }
}

export default Header;
