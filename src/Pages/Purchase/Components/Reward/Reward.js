import React, { Component } from 'react';
import './Reward.scss';

class Reward extends Component {
  constructor() {
    super();
    this.state = { amount: 1 };
  }

  render() {
    const { price, stock, name, details, handleAmount } = this.props;
    return (
      <li className="reward" onClick="chooseReward">
        <div className="checkboxContainer">
          <label className="container">
            <input type="checkbox" />
            <span className="checkmark" />
          </label>
        </div>
        <div className="rewardDetailsContainer">
          <div className="price">
            <span>{price.toLocaleString()}원</span>
            <span> 펀딩합니다.</span>
          </div>
          <div className="rewardName">
            <span>{name}</span>
            <span className="amount">({stock}개 남음)</span>
          </div>
          <p>{details}</p>
          <div className="deliveryInfo">
            <span>배송비 2,500원</span>
            <div className="line" />
            <span>리워드 제공 예상일 : 2021년 04월 중순 (11~20일) 예정</span>
          </div>
          <div>
            <p>수량</p>
            <div className="option">
              <button className="minusBtn"> - </button>
              <input type="number" min="1" max="20" onChange={handleAmount} />
              <button className="plusBtn"> + </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Reward;
