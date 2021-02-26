import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    };
  }

  componentDidMount() {
    this.rankDataAdd();
    this.planDataAdd();
  }

  rankDataAdd = () => {
    fetch('/data/planerRankData.json', {
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
    fetch('http://10.58.1.63:8000/product/main', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        let result = res.result.slice(this.state.prevPlan, this.state.endPlan);
        this.setState({
          planData: result,
        });
      });
  };

  changePlanData = e => {
    const { value } = e.target;
    let prevNum = (Number(value) - 1) * 2;
    const PLANNER = 2;

    this.setState({
      prevPlan: prevNum,
      endPlan: prevNum + PLANNER,
    });
    this.planDataAdd();
  };

  render() {
    const { rankData, planData } = this.state;
    return (
      <header className="planerContainer">
        <section className="planerContainerLeft">
          <div className="planerLeftHeader">기획전</div>
          <div className="planerPageBtnList">
            {[...Array(3)].map((v, i) => {
              return (
                <button
                  className="planerPageBtn"
                  value={i + 1}
                  onClick={this.changePlanData}
                  key={i}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>
          <div className="planerLeftContent">
            {planData.map((data, index) => {
              return (
                <div className="planerContent" key={index}>
                  <div className="planerContentImg">
                    <img src={data[0].planImage} alt="planerProduct" />
                  </div>
                  <div className="planerContentText">
                    <span className="planerTitle">{data[0].planTitle}</span>
                    <div className="planerProductList">
                      {data[0].products.map((subdata, index) => {
                        return (
                          <div
                            className="planerProduct"
                            key={index}
                            onClick={() => {
                              this.props.history.push(`/product/${subdata.id}`);
                            }}
                          >
                            <div className="planerProductText">
                              <p>{subdata.text}</p>
                              <span className="planerPercent">
                                {Math.floor(subdata.percent)}%
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
              <i className="far fa-question-circle" />
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

export default withRouter(PlanerBar);
