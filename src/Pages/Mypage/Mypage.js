import React, { Component } from 'react';
import FundList from './Components/Funded/FundList/FundList';
import LikeList from './Components/Liked/LikeList/LikeList';
import MypageHeader from './Components/MypageHeader';
import './Mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      userInfo: [],
      likeDataList: [],
      fundDataList: [],
    };
  }

  clickHandler = currentId => {
    this.setState({
      currentId,
    });
  };

  componentDidMount() {
    fetch('/data/likeList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(likeDataList => {
        this.setState({
          likeDataList: likeDataList,
        });
      });

    fetch('/data/fundingList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(fundDataList => {
        this.setState({
          fundDataList: fundDataList,
        });
      });

    fetch('/data/userInfo.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(userInfo => {
        this.setState({
          userInfo: userInfo,
        });
      });
  }

  render() {
    const { currentId, userInfo, fundDataList, likeDataList } = this.state;
    console.log('currentId', this.state.currentId);
    return (
      <div className="myPage">
        <div className="header">
          <MypageHeader userInfo={userInfo} />
          {CATEGORY_ARR.map((category, idx) => {
            return (
              <li key={category} onClick={() => this.clickHandler(idx + 1)}>
                {category}
              </li>
            );
          })}
        </div>
        <div className="body">
          <div className="contents">
            {this.state.currentId === 1 && <FundList fundList={fundDataList} />}
            {this.state.currentId === 2 && <LikeList likeList={likeDataList} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Mypage;

// const MAPPING_OBJ = {
//   1: <Funded />,
//   2: <Liked />,
// };

const CATEGORY_ARR = ['펀딩한', '좋아한'];
