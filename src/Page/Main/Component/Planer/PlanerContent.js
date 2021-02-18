import React, { Component } from 'react';

class PlanerContent extends Component {
  render() {
    const { planContent } = this.props;
    return (
      <div className="planerContent">
        <div className="planerContentImg">
          <img src={planContent.planImg} alt="planerProduct" />
        </div>
        <div className="planerContentText">
          <span className="planerTitle">{planContent.planTitle}</span>
          <div className="planerProductList">
            <div className="planerProduct">
              <div className="planerProductText">
                <p>{planContent.planText1}</p>
                <span className="planerPercent">
                  {planContent.planPercent1}
                </span>
                <span className="planerCategori">
                  {planContent.planCategori1}
                </span>
              </div>
              <div className="planerProductImg">
                <img src={planContent.planImg1} />
              </div>
            </div>
            <div className="planerProduct">
              <div className="planerProductText">
                <p>{planContent.planText2}</p>
                <span className="planerPercent">
                  {planContent.planPercent2}
                </span>
                <span className="planerCategori">
                  {planContent.planCategori2}
                </span>
              </div>
              <div className="planerProductImg">
                <img src={planContent.planImg2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PlanerContent;
