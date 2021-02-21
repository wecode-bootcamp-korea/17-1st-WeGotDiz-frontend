import React, { Component } from 'react';
import './PurchaseStep.scss';

class PurchaseStep extends Component {
  render() {
    const {
      isChooseRewardShow,
      isReservationShow,
      isPurchaseCompleted,
    } = this.props;

    return (
      <div className="purchaseStep">
        <div className="line" />
        <div className="steps">
          <div className={'step1 ' + (isChooseRewardShow ? 'on' : 'off')}>
            리워드
            <br />
            선택
          </div>
          <div className={'step2 ' + (isReservationShow ? 'on' : 'off')}>
            결제 예약
          </div>
          <div className={'step3 ' + (isPurchaseCompleted ? 'on' : 'off')}>
            소문내기
          </div>
        </div>
      </div>
    );
  }
}
export default PurchaseStep;
