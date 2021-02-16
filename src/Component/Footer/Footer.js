import React, { Component } from 'react';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footerContainer">
          <div className="footerMenuContainer">
            <div className="footerMenuBar">
              <div className="footerMenuContent">회원가입약관</div>
              <div className="footerMenuContent">
                서비스이용약관
                <i class="fas fa-chevron-down" />
              </div>
              <div className="footerMenuContent footerMenuBold">
                개인정보처리방침
              </div>
              <div className="footerMenuContent">
                위갓디즈 운영정책
                <i class="fas fa-chevron-down" />
              </div>
              <div className="footerMenuContent">
                펀딩 운영정책
                <i class="fas fa-chevron-down" />
              </div>
              <div className="footerMenuContent">
                투자 운영정책
                <i class="fas fa-chevron-down" />
              </div>
              <div className="footerMenuContent">
                스타트업 찾기 운영정책
                <i class="fas fa-chevron-down" />
              </div>
              <div className="footerMenuContent">
                제휴문의
                <i class="fas fa-chevron-down" />
              </div>
              <div className="footerMenuContent">공지사항</div>
              <div className="footerMenuContent">인재채용</div>
              <div className="footerMenuContent">
                SNS
                <i class="fas fa-chevron-down" />
              </div>
            </div>
          </div>
          <div className="footerInfoContainer">
            <div className="footerInfoSectionLeft">
              <div className="footerInfoLeft">
                <div className="infoLeftContent">
                  <i class="far fa-question-circle" />
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
              <div className="footerInfoRight"></div>
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
            <div className="footerInfoSectionRight">오른쪽</div>
          </div>
          <div className="footerNoticeContainer">노티스컨테이너</div>
        </footer>
      </div>
    );
  }
}

export default Footer;
