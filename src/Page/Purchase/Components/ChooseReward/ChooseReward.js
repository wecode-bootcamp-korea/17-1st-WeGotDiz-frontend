import React, { Component } from 'react';
import Reward from '../Reward/Reward';
import './ChooseReward.scss';

class ChooseReward extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { handleReward, rewardData } = this.props;
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
              key={reward.id}
              price={reward.price}
              stock={reward.stock}
              name={reward.name}
              details={reward.details}
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
                <input type="number" placeholder="0" />
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
          </div>
        </div>
        <p className="fundingTotalInfo">
          아무나 먹는 비건 소스 3종 비건, 이제는 '맛있게' 받아들이세요!에{' '}
          <em className="totalPrice">0</em> 원을 펀딩합니다.
        </p>
        <button className="nextBtn" onClick={handleReward}>
          다음 단계로 <i className="fas fa-chevron-right" />
        </button>
      </div>
    );
  }
}

export default ChooseReward;
