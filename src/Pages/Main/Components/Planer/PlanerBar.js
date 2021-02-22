import React, { Component } from 'react';
import RankProduct from './RankProduct';

import './PlanerBar.scss';

class PlanerBar extends Component {
  constructor() {
    super();
    this.state = {
      rankData: [],
      planData: [],
      prevPlan: 0,
      endPlan: 2,
      page: '1',
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
      .then(res => {
        let result = res.planData.slice(
          this.state.prevPlan,
          this.state.endPlan
        );
        this.setState({
          planData: result,
        });
      });
  };

  // ============================================

  // 기획전 페이지 이동

  changePlanData = e => {
    if (e.target.value === '1') {
      this.setState({
        prevPlan: 0,
        endPlan: 2,
      });
    } else if (e.target.value === '2') {
      this.setState({
        prevPlan: 2,
        endPlan: 4,
      });
    } else if (e.target.value === '3') {
      this.setState({
        prevPlan: 4,
        endPlan: 6,
      });
    }
    this.planDataAdd();
  };

  render() {
    const { rankData, planData } = this.state;
    return (
      <header className="planerContainer">
        <section className="planerContainerLeft">
          <div className="planerLeftHeader">기획전</div>
          <div className="planerPageBtnList">
            <button
              className="planerPageBtn"
              value="1"
              onClick={this.changePlanData}
            >
              1
            </button>
            <button
              className="planerPageBtn"
              value="2"
              onClick={this.changePlanData}
            >
              2
            </button>
            <button
              className="planerPageBtn"
              value="3"
              onClick={this.changePlanData}
            >
              3
            </button>
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
                          <div
                            className="planerProduct"
                            key={index}
                            onClick={() => {
                              //this.props.history.push(`/product/detail/${subdata.id}`);
                              console.log('확인좀 >>>>>' + subdata.id);
                              console.log('뭐눌름 ? >>>>>' + subdata.id);
                            }}
                          >
                            <div className="planerProductText">
                              <p>{subdata.text}</p>
                              <span className="planerPercent">
                                {subdata.percent}
                              </span>
                              <span className="planercategory">
                                {subdata.category}
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
