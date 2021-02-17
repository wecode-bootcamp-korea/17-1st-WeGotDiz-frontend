import React, { Component } from 'react';
import RankProduct from './RankProduct';

import './PlanerBar.scss';

class PlanerBar extends Component {
  constructor() {
    super();
    this.state = {
      rankData: [],
      planData: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/PlanerRankData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          rankData: data,
        });
      });
  }

  render() {
    const { rankData } = this.state;
    return (
      <header className="planerContainer">
        <section className="planerContainerLeft">
          <div className="planerLeftHeader">기획전</div>
          <div className="planerLeftContent">
            <div className="planerContent">
              <div className="planerContentImg">
                <img src="./images/b1.jpg" alt="planerProduct" />
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
                  <div className="planerProductImg">{/* <img></img> */}</div>
                </div>
              </div>
            </div>
            <div className="planerContent">
              <div className="planerContentImg">
                <img src="./images/b1.jpg" alt="planerProduct" />
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
                  <div className="planerProductImg">{/* <img></img> */}</div>
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
              <i className="far fa-question-circle"></i>
            </div>
            {rankData.map((data, index) => {
              return <RankProduct product={data} key={index} />;
            })}
          </div>
        </section>
      </header>
    );
  }
}

export default PlanerBar;
