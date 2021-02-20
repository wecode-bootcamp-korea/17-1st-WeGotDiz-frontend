import React, { Component } from 'react';
import AlertInfo from '../AlertInfo/AlertInfo';
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
            <AlertInfo />
            <AlertInfo />
            <AlertInfo />
          </div>
          <button
            onClick={this.props.handleModal}
            className="continueToFundingBtn"
          >
            계속해서 펀딩하기
          </button>
        </div>
      </div>
    );
  }
}

export default AlertModal;
