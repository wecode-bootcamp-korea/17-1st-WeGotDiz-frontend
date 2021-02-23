import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Progressbar from '../../../../Components/Progressbar/Progressbar';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: this.props.percent,
    };
  }

  // changeDate()
  // goProductDetail = () => {
  //   this.props.history.push(`/product/${this.props.id}`);
  //   console.log('누른거 ID값 >>>>>' + this.props.id);
  // };

  render() {
    const { id, img, text, category, brand, percent, price, date } = this.props;
    console.log('지금 아이디 몇번 ? 보내주고있음 >>>>>' + this.props.id);
    return (
      <div
        className="productContent"
        onClick={() => this.props.history.push(`/product/${this.props.id}`)}
      >
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
              <span className="productPrice">{price}원</span>
            </div>
            {/* {this.changeDate(date)} */}
            {date[0] === '-' ? (
              <span className="productDate">마감</span>
            ) : (
              <span className="productDate">{date}일 남음</span>
            )}
            {/* <span className="productDate">{date}일 남음</span> */}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Product);
