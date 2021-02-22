import React, { Component } from 'react';
import Progressbar from '../../../../Components/Progressbar/Progressbar';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: this.props.percent,
    };
  }

  goProductDetail = () => {
    // this.props.history.push(`/product/detail/${this.props.id}`);
    console.log('누른거 ID값 >>>>>' + this.props.id);
  };

  render() {
    const { id, img, text, category, brand, percent, price, date } = this.props;
    return (
      <div className="productContent" onClick={this.goProductDetail}>
        <div className="productImg">
          <img src={img} alt="productImg" />
        </div>
        <div className="productText">
          <div className="productTitle">
            <p>{text}</p>
            <span>{category}</span>
            {/* <span>{brand}</span> */}
          </div>
          <Progressbar percent={percent} />
          <div className="productSubTitle">
            <div className="subTitleContent">
              <span className="productPercent">{percent}%</span>
              <span className="productDot">·</span>
              <span className="productPrice">{price}</span>
            </div>
            <span className="productDate">{date}일 남음</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
