import React, { Component } from 'react';
import './Banner.scss';

class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <p className="category">반려동물</p>
        <p className="productTtile">
          당기는 산책 습관? 베이컨박스 신제품, 산책 안전벨트로 #충격완화
        </p>
        <div className="titleBackground" />
      </div>
    );
  }
}

export default Banner;
