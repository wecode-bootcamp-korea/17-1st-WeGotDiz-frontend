import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import FundList from './Components/Funded/FundList/FundList';
import LikeList from './Components/Liked/LikeList/LikeList';
import MypageHeader from './Components/MypageHeader';
import './Mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      MypageData: {},
      userInfo: [],
      funding_list: [],
      like_list: [],
    };
  }

  clickHandler = currentId => {
    this.setState({
      currentId,
    });
  };

  componentDidMount() {
    fetch('/data/myPageData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          MypageData: res.data,
          userInfo: res.data.user_info,
          funding_list: res.data.funding_list,
          like_list: res.data.like_list,
        });
      });
  }

  render() {
    const { currentId, userInfo, funding_list, like_list } = this.state;
    const CATEGORY_ARR = ['펀딩한', '좋아한'];
    return (
      <div className="myPage">
        <div className="header">
          <MypageHeader userInfo={userInfo} fundList={funding_list} />
          <div className="category">
            {CATEGORY_ARR.map((category, idx) => {
              return (
                <span
                  className={currentId === idx + 1 ? 'tabOn' : 'tabOff'}
                  onClick={() => this.clickHandler(idx + 1)}
                >
                  {category}
                </span>
              );
            })}
          </div>
        </div>
        <div className="body">
          <div className="contents">
            {currentId === 1 && <FundList fundList={funding_list} />}
            {currentId === 2 && <LikeList likeList={like_list} />}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Mypage);
