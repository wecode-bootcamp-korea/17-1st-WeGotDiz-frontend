import React, { Component } from 'react';
import './PurchaseStep.scss';

class PurchaseStep extends Component {
  render() {
    return (
      <div className="purchaseStep">
        <div className="step1">
          리워드
          <br />
          선택
        </div>
        <div className="step2">결제 예약</div>
        <div className="step3">소문내기</div>
        <div className="line" />
      </div>
    );
  }
}

export default PurchaseStep;
