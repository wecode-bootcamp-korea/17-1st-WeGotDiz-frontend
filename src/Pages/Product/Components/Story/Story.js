import React, { Component } from 'react';
import './Story.scss';

class Story extends Component {
  constructor() {
    super();
    this.state = {
      productData: {},
    };
  }

  componentDidMount() {
    this.handleData();
  }

  handleData = () => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res,
        });
      });
  };

  render() {
    const {
      thumbnail_url,
      description,
      goal_amount,
      opening_date,
      closing_date,
      story,
    } = this.state.productData;

    return (
      <div className="story">
        <img src={thumbnail_url} alt="Product" />
        <p className="productDescription">{description}</p>
        <div className="fundingInfo">
          <p className="goal">목표 금액 {goal_amount.toLocaleScale()}원</p>
          <p className="term">
            펀딩 기간 {opening_date}-{closing_date}
          </p>
          <p className="fundingNotice">
            100% 이상 모이면 펀딩이 성공되며, 펀딩 마감일까지 목표 금액이 100%
            모이지 않으면 결제가 진행되지 않습니다.
          </p>
        </div>
        <div>{story}</div>
      </div>
    );
  }
}

export default Story;
