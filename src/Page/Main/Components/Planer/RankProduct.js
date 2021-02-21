import React, { Component } from 'react';

class RankProduct extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="RightContentRank">
        <div className="RankNumber">
          <span>{product.rankId}</span>
        </div>
        <div className="RankContent">
          <p>{product.rankText}</p>
          <span className="RankPercent">{product.rankPercent}</span>
          <span className="Rankcategory">{product.rankcategory}</span>
        </div>
        <div className="RankImg">
          <img src={product.rankImg} alt="" />
        </div>
      </div>
    );
  }
}

export default RankProduct;
