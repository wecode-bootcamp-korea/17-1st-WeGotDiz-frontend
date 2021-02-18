import React, { Component } from 'react';
import './AlertModal.scss';

class AlertModal extends Component {
  render() {
    return (
      <div className="alertModal">
        <div className="modalContainer">
          <div className="modalMain">
            <button className="backToStoryBtn">
              <i className="fas fa-arrow-left" />
              스토리로 돌아가기
            </button>
            <header>
              <span>잠깐!</span> 결제하기가 아닌 펀딩하기인 이유를 확인하고,
              펀딩하세요.
            </header>
            <div className="checkboxWrapper">
              <div className="checkboxContainer">
                <label>
                  <input type="checkbox" />
                  <span>
                    펀딩한 리워드는 새롭게 준비하고 있는 제품서비스입니다.
                  </span>
                </label>
              </div>
              <div className="checkboxInfo">
                <p>
                  펀딩 후, 리워드를 제작・준비하는 크라우드펀딩 특성상, 품질
                  이슈가 발생할 수 있습니다.
                </p>
                <p>
                  리워드 품질 이슈 발생 시 반환·정책 - 상세 정책을 꼭
                  확인해주세요.
                </p>
              </div>
            </div>

            <div className="checkboxContainer"></div>

            <div></div>
            <div>
              <label>
                <input type="checkbox" />
                <span>
                  바로 결제되지 않으며, 펀딩 종료 후에는 결제를 취소할 수
                  없습니다.
                </span>
              </label>
            </div>
            <div>
              <label>
                <input type="checkbox" />
                <span>펀딩한 리워드는 즉시 배송되지 않습니다.</span>
              </label>
            </div>
          </div>
          <button className="continueToFundingBtn" disabled>
            계속해서 펀딩하기
          </button>
        </div>
      </div>
    );
  }
}

export default AlertModal;
