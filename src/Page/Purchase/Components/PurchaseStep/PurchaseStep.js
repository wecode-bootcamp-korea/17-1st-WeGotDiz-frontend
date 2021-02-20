import React, { Component } from 'react';
import './PurchaseStep.scss';

class PurchaseStep extends Component {
  render() {
    return (
      <div className="purchaseStep">
        <div className="line" />
        <div className="steps">
          <div className="stepOn">
            리워드
            <br />
            선택
          </div>
          <div className="stepOff">결제 예약</div>
          <div className="stepOff">소문내기</div>
        </div>
      </div>
    );
  }
}

export default PurchaseStep;
