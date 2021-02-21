import React, { Component } from 'react';
import FundingList from '../../Funded/FundingList/FundingList';
import LikeList from '../../Liked/LikeList/LikeList';
import './MypageList.scss';

class MypageList extends Component {
  render() {
    console.log('2. fundDataProps', this.props.fundDataList);
    const { clickHandler } = this.props;
    const MAPPING_OBJ = [
      <FundingList key={0} fundDataList={this.props.fundDataList} />,
      <LikeList key={1} likeDataList={this.props.likeList} />,
    ];
    const CATEGORY_ARR = ['펀딩한', '좋아한'];
    return (
      <div className="mypageList">
        <ul className="tabList">
          {CATEGORY_ARR.map((category, idx) => {
            return (
              <li key={idx} onClick={() => clickHandler(idx + 1)}>
                {category}
              </li>
            );
          })}
        </ul>
        <div>
          <div className="wrapper">
            <div className="content">{MAPPING_OBJ[0]}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MypageList;
