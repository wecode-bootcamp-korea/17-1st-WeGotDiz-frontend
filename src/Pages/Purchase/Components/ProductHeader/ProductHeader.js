import React, { Component } from 'react';
import './ProductHeader.scss';

class ProductHeader extends Component {
  render() {
    const { goToStory, productTitle, makerName, makerImage } = this.props;
    return (
      <header className="productHeader">
        <button className="backToStoryBtn" onClick={goToStory}>
          <i className="fas fa-chevron-left" />
          스토리로 돌아가기
        </button>
        <div className="productInfoContainer">
          <p>{productTitle}</p>
          <img alt="Maker profile" className="makerImg" src={makerImage} />
          <span className="makerName">{makerName}</span>
        </div>
      </header>
    );
  }
}

export default ProductHeader;
