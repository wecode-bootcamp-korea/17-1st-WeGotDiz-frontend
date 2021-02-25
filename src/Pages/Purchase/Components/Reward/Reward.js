import React, { Component } from 'react';
import CheckboxRect from '../CheckboxRect/CheckboxRect';
import './Reward.scss';

class Reward extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  render() {
    const {
      value,
      id,
      price,
      stock,
      name,
      combination,
      handleCheckedReward,
      handleQuantity,
      quantity,
      incrementCount,
      decrementCount,
    } = this.props;

    return (
      <li className="reward" value={id}>
        <div className="checkboxContainer">
          <CheckboxRect
            checked={value}
            id={id}
            onChange={handleCheckedReward}
          />
        </div>
        <div className="rewardDetailsContainer">
          <div className="price">
            <span>{Math.floor(price).toLocaleString()}원</span>
            <span> 펀딩합니다.</span>
          </div>
          <div className="rewardName">
            <span>{name}</span>
            <span className="amount">({stock}개 남음)</span>
          </div>
          <p>{combination}</p>
          <div className="deliveryInfo">
            <span>배송비 2,500원</span>
            <div className="line" />
            <span>리워드 제공 예상일 : 2021년 04월 중순 (11~20일) 예정</span>
          </div>
          {value && (
            <div className="chooseQuantity">
              <p>수량</p>
              <div className="option">
                <button className="minusBtn" onClick={decrementCount}>
                  -
                </button>
                <input
                  type="number"
                  value={quantity ? quantity : 1}
                  onChange={handleQuantity}
                />
                <button className="plusBtn" onClick={incrementCount}>
                  +
                </button>
              </div>
            </div>
          )}
        </div>
      </li>
    );
  }
}

export default Reward;
