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
      isFunded: true,
      isLiked: false,
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
    //console.log('currentId', this.state.currentId);
    //console.log('-----');
    //console.log('t:f is F>>>', !this.state.isFunded);
    //console.log('f:t is L>>>', this.state.isLiked);
    return (
      <div className="myPage">
        <div className="header">
          <MypageHeader userInfo={userInfo} />
          <div className="category">
            {/* {CATEGORY_ARR.map((category, idx) => {
              return (
                <span
                  className={
                    (currentId === 1 && 'clickColor') ||
                    (currentId === 2 && 'clickColor')
                  }
                  key={category}
                  onClick={() => this.clickHandler(idx + 1)}
                >
                  {category}
                </span> */}
            <span
              className={this.state.isFunded ? 'tabOn' : 'tabOff'}
              onClick={() => this.clickHandler(1)}
            >
              펀딩한
            </span>
            <span
              className={this.state.isLiked ? 'tabOn' : 'tabOff'}
              onClick={() => this.clickHandler(2)}
            >
              좋아한
            </span>
          </div>
        </div>
        <div className="body">
          <div className="contents">
            {currentId === 1 && <FundList fundList={fundDataList} />}
            {currentId === 2 && <LikeList likeList={likeDataList} />}
          </div>
        </div>
      </div>
    );
  }
}

export default Mypage;

// const CATEGORY_ARR = ['펀딩한', '좋아한'];
