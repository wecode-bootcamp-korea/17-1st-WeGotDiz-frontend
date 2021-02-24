import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CheckboxRect from '../CheckboxRect/CheckboxRect';
import Reward from '../Reward/Reward';
import './ChooseReward.scss';

class ChooseReward extends Component {
  // handleTotalPrice = () => {
  //   const { selectedReward, extraFunding } = this.props;

  //   if (selectedReward || extraFunding) {
  //     Math.floor(
  //       selectedReward.reduce((acc, cur) => acc + cur.price, 0) + extraFunding
  //     ).toLocaleString();
  //   } else return 0;
  // };
  render() {
    const {
      rewardData,
      incrementCount,
      handleCheckedReward,
      handleExtraFunding,
      handleChooseReward,
      extraFunding,
      handleQuantity,
      quantity,
      selectedReward,
      decrementCount,
      productTitle,
    } = this.props;

    console.log(selectedReward.price);

    return (
      <div className="chooseReward">
        <header>
          <span className="sectionTitle">리워드 선택</span>
          <span className="sectionDescription">
            펀딩해주시는 금액에 따라 감사의 의미로 리워드를 제공해 드립니다.
          </span>
          <a href="www.wadiz.com">
            <i className="fas fa-exclamation-circle" /> 펀딩하기는 쇼핑하기가
            아닙니다! 자세히 알아보세요.
          </a>
        </header>
        <dl className="rewardList">
          {rewardData.map(reward => (
            <Reward
              reward={reward}
              key={reward.id}
              id={reward.id}
              value={reward.value}
              price={reward.price}
              stock={reward.remaining_stock}
              name={reward.name}
              combination={reward.combination}
              handleCheckedReward={handleCheckedReward}
              handleQuantity={handleQuantity}
              quantity={quantity}
              incrementCount={incrementCount}
              decrementCount={decrementCount}
            />
          ))}
        </dl>
        <div className="extraFundingOption">
          <header className="sectionTitle">후원금 더하기 (선택)</header>
          <div className="extraFundingInput">
            <p className="sectionDescription">
              후원금을 더하여 펀딩할 수 있습니다. 추가 후원금을
              입력하시겠습니까?
            </p>
            <div>
              <label>
                <input
                  type="number"
                  placeholder="0"
                  name="extraFunding"
                  onChange={handleExtraFunding}
                />
              </label>
              <span>원을 추가로 후원합니다.</span>
            </div>
          </div>
        </div>
        <div className="publicPrivateOption">
          <header className="sectionTitle">공개여부 (선택)</header>
          <div>
            <p className="sectionDescription">
              서포터 목록에 서포터 이름과 펀딩 금액이 공개됩니다. 조용히
              펀딩하고 싶으시다면, 비공개로 선택해주세요.
            </p>
            <p className="subSectionDescription">
              커뮤니티, 새소식 댓글 작성 시에는 비공개 여부와 상관없이 펀딩
              참여자 표시가 노출됩니다.
            </p>
            <div className="checkboxList">
              <CheckboxRect label="이름 비공개" />
              <CheckboxRect label="펀딩금액 비공개" />
            </div>
          </div>
        </div>
        <p className="fundingTotalInfo">
          {productTitle} 에{' '}
          <em className="totalPrice">
            {selectedReward &&
              (selectedReward || extraFunding
                ? (
                    selectedReward.reduce((acc, cur) => acc + cur.price, 0) +
                    extraFunding * 1
                  ).toLocaleString()
                : 0)}
          </em>{' '}
          원을 펀딩합니다.
        </p>
        <button className="nextBtn" onClick={handleChooseReward}>
          다음 단계로 <i className="fas fa-chevron-right" />
        </button>
      </div>
    );
  }
}

export default withRouter(ChooseReward);
