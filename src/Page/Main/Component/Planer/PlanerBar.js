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
    this.rankDataAdd();
    this.planDataAdd();
  }

  rankDataAdd = () => {
    fetch('http://localhost:3000/data/PlanerRankData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          rankData: data,
        });
      });
  };

  planDataAdd = () => {
    fetch('http://localhost:3000/data/PlanerData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          planData: data.test,
        });
      });
  };

  render() {
    const { rankData, planData } = this.state;
    return (
      <header className="planerContainer">
        <section className="planerContainerLeft">
          <div className="planerLeftHeader">기획전</div>
          <div className="planerPageBtnList">
            <button className="planerPageBtn">1</button>
            <button className="planerPageBtn">2</button>
            <button className="planerPageBtn">3</button>
          </div>
          <div className="planerLeftContent">
            {planData.map((data, index) => {
              return (
                <div className="planerContent" key={index}>
                  <div className="planerContentImg">
                    <img src={data.planImg} alt="planerProduct" />
                  </div>
                  <div className="planerContentText">
                    <span className="planerTitle">{data.planTitle}</span>
                    <div className="planerProductList">
                      {data.products.map((subdata, index) => {
                        return (
                          <div className="planerProduct" key={index}>
                            <div className="planerProductText">
                              <p>{subdata.text}</p>
                              <span className="planerPercent">
                                {subdata.percent}
                              </span>
                              <span className="planerCategori">
                                {subdata.categori}
                              </span>
                            </div>
                            <div className="planerProductImg">
                              <img src={subdata.img} alt="product" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
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
