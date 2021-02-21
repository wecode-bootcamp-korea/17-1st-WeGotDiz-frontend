import React, { Component } from 'react';

class FooterNotice extends Component {
  render() {
    return (
      <div className="footerNoticeContainer">
        <p>
          <span className="noticeFirst">투자위험고지</span>
          비상장기업 투자는 원금 손실의 가능성이 크니
          <span className="noticeSecond">투자 위험 안내</span>를 꼭 확인하세요 .
        </p>
      </div>
    );
  }
}

export default FooterNotice;
