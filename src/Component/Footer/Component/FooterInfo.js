import React, { Component } from 'react';

class FooterInfo extends Component {
  render() {
    return (
      <>
        <div className="footerInfoContainer">
          <div className="footerInfo">
            <div className="footerInfoSectionLeft">
              <div className="footerInfoLeft">
                <div className="infoLeftContent">
                  <i className="far fa-question-circle" />
                  위갓디즈에 문의하기
                </div>
                <div className="infoRightContent">
                  <div className="infoRightTop">
                    <span>위갓디즈 대표 고객센터 |</span>
                    <span>wgd@google.com |</span>
                    <span>1004-1004</span>
                  </div>
                  <div className="infoRightBottom">
                    <span>
                      상담 가능 시간 : 평일 오전 10시~오후10시 (연중무휴)
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footerInfoSectionCenter">
              <div className="footerInfoCenter">
                <div className="infoTopContent">
                  <span>위코드플랫폼 (주) |</span>
                  <span>대표이사 위갓디 |</span>
                  <span>사업자등록번호 777-1004</span>
                </div>
                <div className="infoCenterContent">
                  <span>서울시 강남구 테헤란로 427 위워크타워 10층 WGD팀</span>
                </div>
                <div className="infoBottomContent">
                  <span>ⓒ wegotdiz Platform Co., Ltd.</span>
                </div>
              </div>
            </div>
            <div className="footerInfoSectionRight">
              <div className="infoRightApple">
                <i className="fab fa-apple"></i>
                <span>iOS 앱</span>
              </div>
              <div className="infoRightAndroid">
                <i className="fas fa-caret-right"></i>
                <span>안드로이드 앱</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default FooterInfo;
