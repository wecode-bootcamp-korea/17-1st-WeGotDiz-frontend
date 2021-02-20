import React, { Component } from 'react';
import './ProductHeader.scss';

class ProductHeader extends Component {
  render() {
    return (
      <header className="productHeader">
        <button className="backToStoryBtn">
          <i className="fas fa-chevron-left" />
          스토리로 돌아가기
        </button>
        <div className="productInfoContainer">
          <p>[2.2억 업그레이드 앵콜] 9가지 컬러 9기능 돌아온 화제의 후드티</p>
          <img
            alt="Maker profile"
            className="makerImg"
            src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1484722933/ypd1aluy7j0x7gqhjczv.png"
          />
          <span className="makerName">gitgit</span>
        </div>
      </header>
    );
  }
}

export default ProductHeader;
