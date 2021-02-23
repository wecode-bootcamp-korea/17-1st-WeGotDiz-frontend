import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './PurchaseComplete.scss';

class PurchaseComplete extends Component {
  render() {
    return <div className="PurchaseComplete">결제 완료</div>;
  }
}

export default withRouter(PurchaseComplete);
