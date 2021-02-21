import React, { Component } from 'react';
import './Story.scss';

class Story extends Component {
  constructor() {
    super();
    this.state = {
      productData: {},
      bannerData: [],
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
          bannerData: res.bannerData,
        });
      });
  };

  render() {
    return (
      <div className="story">
        <img src={this.state.bannerData.imgUrl} alt="Product" />
        <p className="productDescription">
          지속가능한 키토제닉! 조각당 당질 2g의 키토제닉 활용도 만점 식사빵!
          당질을 줄여서 건강한 식단을 하고 싶은분께 추천합니다
        </p>
        <div className="fundingInfo">
          <p className="goal">목표 금액 500,000원</p>
          <p className="term">펀딩 기간 2021.01.25-2021.02.22</p>
          <p className="fundingNotice">
            100% 이상 모이면 펀딩이 성공되며, 펀딩 마감일까지 목표 금액이 100%
            모이지 않으면 결제가 진행되지 않습니다.
          </p>
        </div>
        {}
      </div>
    );
  }
}

export default Story;
