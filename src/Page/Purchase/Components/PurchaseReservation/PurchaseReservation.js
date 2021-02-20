import React, { Component } from 'react';
import './PurchaseReservation.scss';

class PurchaseReservation extends Component {
  render() {
    return (
      <div className="orderDetails">
        <div className="table">
          <p>[얼리버드] 딥소스 3종 세트 ( 10% 할인 )</p>
          <p>
            화이트 딥소스 1개 ( 200g ) 옐로우 딥소스 1개 ( 200g ) 블랙 딥소스
            1개 ( 200g )
          </p>
          <div className="justifyRight">
            <span>수량 : 1개</span>
            <span>16,200원</span>
          </div>
          <div>
            <div className="dd">
              <span>추가 후원금</span>
              <span>0원</span>
            </div>
            <div className="dd">
              <span>배송비</span>
              <span>3,000원</span>
            </div>
            <div className="dd">
              <span>쿠폰 사용</span>
              <span>사용가능한 쿠폰이 없습니다.</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PurchaseReservation;
