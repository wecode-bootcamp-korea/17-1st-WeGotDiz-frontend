import React, { Component } from 'react';
import CheckboxRect from '../CheckboxRect/CheckboxRect';
import './Reward.scss';

class Reward extends Component {
  addAmount = () => {};
  reduceAmount = () => {};
  render() {
    const {
      id,
      price,
      stock,
      name,
      combination,
      quantity,
      handleQuantity,
      addQuantity,
      handleReward,
      reward,
      subtractQuantity,
    } = this.props;

    return (
      <li className="reward" onClick={handleReward} id={id}>
        <div className="checkboxContainer">
          <CheckboxRect checked={reward.id} />
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
          <p>{combination}</p>
          <div className="deliveryInfo">
            <span>배송비 2,500원</span>
            <div className="line" />
            <span>리워드 제공 예상일 : 2021년 04월 중순 (11~20일) 예정</span>
          </div>
          <div>
            <p>수량</p>
            <div className="option">
              <button className="minusBtn" onClick={() => subtractQuantity()}>
                -
              </button>
              <input
                type="number"
                min="1"
                max="20"
                value={quantity}
                onChange={handleQuantity}
              />
              <button className="plusBtn" onClick={() => addQuantity()}>
                +
              </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Reward;
