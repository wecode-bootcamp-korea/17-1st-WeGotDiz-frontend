import React, { Component } from 'react';
import './PlanerBar.scss';

class PlanerBar extends Component {
  render() {
    return (
      <header className="planerContainer">
        <section className="planerContainerLeft">
          <div className="planerLeftHeader">기획전</div>
          <div className="planerLeftContent">
            <div className="planerContent">
              <div className="planerContentImg">
                <img />
              </div>
              <div className="planerContentText">
                <span>상 받은 펀딩</span>
                <div className="planerProduct">
                  <div className="planerProductText">
                    <p>
                      [3.5억 앵콜] 화제의 보드게임 #렉시오 플러스가
                      돌아왔습니다.
                    </p>
                    <span>1767%</span>
                    <span>게임 취미</span>
                  </div>
                  <div className="planerProductImg">
                    <img></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="planerContainerRight">
          <div className="planerRightHeader">실시간 랭킹</div>
          <div className="planerRightContent">
            <div className="RightContentHeader">
              <span>펀딩하기</span>
              <i class="far fa-question-circle"></i>
            </div>
            <div className="RightContentRank">
              <div className="RankNumber">
                <span>1</span>
              </div>
              <div className="RankContent">
                <p>fewfwefwef</p>
                <span>1,004%</span>
                <span>반려동물</span>
              </div>
              <div className="RankImg">
                <img />
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}

export default PlanerBar;
