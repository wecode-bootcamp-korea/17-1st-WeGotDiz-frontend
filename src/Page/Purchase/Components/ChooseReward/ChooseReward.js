import React, { Component } from 'react';
import './ChooseReward.scss';

class ChooseReward extends Component {
  render() {
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
        <div className="rewardList">
          <div className="reward">
            <label>
              <input type="checkbox" />
            </label>
            <div>
              <p>55,000원 펀딩합니다.</p>
              <span>[슈퍼 얼리버드] 싱글</span>
              <span>(342개 남음)</span>
              <p>
                **해당 리워드는 [얼리버드] 리워드보다 할인폭이 큰 [슈퍼
                얼리버드] 리워드 입니다. 선착순으로 펀딩하므로 해당 리워드
                소진시 펀딩이 불가능함을 알려드립니다.** 구성 : 세상 편한 후드티
                1EA 사이즈 : M, L, XL, XXL 컬러 : 블랙, 그레이, 미드나잇 블루,
                블루, 샌드, 브라운, 핑크, 퍼플, 버건디 *예상 배송 시작일 -> 4월
                9일부터 순차발송
              </p>
              <span>배송비 3,000원</span>
              <span>리워드 제공 예상일 : 2021년 04월 중순 (11~20일) 예정</span>
              <div>
                <div>
                  <button> - </button>
                  <input type="number"></input>
                  <button> + </button>
                </div>
                <div>
                  <select>
                    <option>옵션을 선택하세요</option>
                    <option>블랙</option>
                    <option>레드</option>
                    <option>그린</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ExtraFunding">
          <header className="sectionTitle">후원금 더하기 (선택)</header>
          <div>
            <p className="sectionDescription">
              후원금을 더하여 펀딩할 수 있습니다. 추가 후원금을
              입력하시겠습니까?
            </p>
            <label>
              <input type="text" placeholder="0" />
            </label>
            <span>원을 추가로 후원합니다.</span>
          </div>
        </div>
        <div className="option2">
          <header className="sectionTitle">공개여부 (선택)</header>
          <div>
            <p className="sectionDescription">
              서포터 목록에 서포터 이름과 펀딩 금액이 공개됩니다. 조용히
              펀딩하고 싶으시다면, 비공개로 선택해주세요.
            </p>
            <p>
              커뮤니티, 새소식 댓글 작성 시에는 비공개 여부와 상관없이 펀딩
              참여자 표시가 노출됩니다.
            </p>
          </div>
        </div>
        <p className="fundingTotalInfo">
          아무나 먹는 비건 소스 3종 비건, 이제는 '맛있게' 받아들이세요!에 0 원을
          펀딩합니다.
        </p>
        <button className="nextBtn">다음 단계로 </button>
      </div>
    );
  }
}

export default ChooseReward;
