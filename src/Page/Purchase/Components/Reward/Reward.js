import React, { Component } from 'react';
import './Reward.scss';

class Reward extends Component {
  constructor() {
    super();
    this.state = { rewardContainerColor: true };
  }

  render() {
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
            <span>55,000원</span>
            <span> 펀딩합니다.</span>
          </div>
          <div className="rewardName">
            <span>[슈퍼 얼리버드] 싱글</span>
            <span className="amount">(342개 남음)</span>
          </div>
          <p>
            무주 담은 잼에서 최초로 선보이는 무주 담은 샤인잼 8병을 다시 만날 수
            없는 가격으로 만나보실 수 있습니다. <br />
            112,000 ▷ 72,800 35% 혜택!!
          </p>
          <div className="deliveryInfo">
            <span>배송비 3,000원</span>
            <div className="line" />
            <span>리워드 제공 예상일 : 2021년 04월 중순 (11~20일) 예정</span>
          </div>
          <div>
            <p>수량</p>
            <div className="option">
              <button> - </button>
              <input type="number" min="1" max="20" />
              <button> + </button>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default Reward;
