import React, { Component } from 'react';

class Product extends Component {
  render() {
    const { productData } = this.props;
    return (
      <div className="productContent">
        <div className="productImg">
          <img src={productData.img} alt="productImg" />
        </div>
        <div className="productText">
          <div className="productTitle">
            <p>{productData.text}</p>
            <span>{productData.categori}</span>
            <span>{productData.brand}</span>
          </div>
          <div className="progressBarAll">
            <div
              className="progressBarPlay"
              style={{ width: `${productData.percent}` }}
            ></div>
          </div>
          <div className="productSubTitle">
            <div className="subTitleContent">
              <span className="productPercent">{productData.percent}</span>
              <span className="productDot">·</span>
              <span className="productPrice">{productData.price}</span>
            </div>
            <span className="productDate">{productData.date}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
