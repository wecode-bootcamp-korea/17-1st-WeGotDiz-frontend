import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PurchaseComplete.scss';

class PurchaseComplete extends Component {
  render() {
    return (
      <div className="purchaseComplete">
        <div className="purchaseCompletedContainer">
          <header>펀딩 완료 🎉</header>
          <p>결제가 완료되었습니다!</p>
        </div>
      </div>
    );
  }
}

export default withRouter(PurchaseComplete);
