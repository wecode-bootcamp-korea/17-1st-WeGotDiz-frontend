import React, { Component } from 'react';
import './ProductHeader.scss';

class ProductHeader extends Component {
  render() {
    const { title, maker_name, maker_image } = this.props.productData;
    const { goToStory } = this.props;
    return (
      <header className="productHeader">
        <button className="backToStoryBtn" onClick={goToStory}>
          <i className="fas fa-chevron-left" />
          스토리로 돌아가기
        </button>
        <div className="productInfoContainer">
          <p>{title}</p>
          <img alt="Maker profile" className="makerImg" src={maker_image} />
          <span className="makerName">{maker_name}</span>
        </div>
      </header>
    );
  }
}

export default ProductHeader;
