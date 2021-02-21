import React, { Component } from 'react';
//import Funded from './Funded/Funded';
//import Liked from './Liked/Liked';
// import FundingList from './Components/Funded/FundingList/FundingList';
// import LikeList from './Liked/LikeList/LikeList';
//import FundingList from './Components/Funded/FundingList/FundingList';
//import LikeList from './Components/Liked/LikeList/LikeList';
import MypageHeader from './Components/Mypages/MypageHeader/MypageHeader';
import MypageList from './Components/Mypages/MypageList/MypageList';
//import MypageActivityList from './Components/MypageHeader/MypageHeader';
import './Mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      userInfo: [],
      likeList: [],
      fundDataList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3002/data/likeList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(likeData => {
        this.setState({
          likeList: likeData,
        });
      });

    fetch('http://localhost:3002/data/fundingList.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(fundDataList => {
        this.setState({
          fundDataList: fundDataList,
        });
      });

    fetch('http://localhost:3002/data/userInfo.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(userInfo => {
        this.setState({
          userInfo: userInfo,
        });
      });
  }

  clickHandler = currentId => {
    this.setState({
      currentId,
    });
  };

  render() {
    //console.log('1. stateLike>>>', this.state.likeList);
    console.log('1. stateFund >>>', this.state.fundingList);
    //const { currentId } = this.state;
    // const MAPPING_OBJ = {
    //   1: <FundingList fundData={this.state.fundingList} />,
    //   2: <LikeList likeData={this.state.likeList} />,
    // };
    // const CATEGORY_ARR = ['펀딩한', '좋아한'];
    return (
      <div className="myPage">
        <MypageHeader userInfo={this.state.userInfo} />
        <MypageList
          likeData={this.state.likeList}
          fundDataList={this.state.fundingList}
          clickHandler={this.clickHandler}
        />
        {/* <div className="topInfo">
          <h1>허혜성</h1>
          <p>개인회원</p>
          <img
            className="userImg"
            src="https://media.vlpt.us/images/hyehye/post/b33666d0-2d98-4f96-8b5f-0777deb7c8de/userDefaultImage.png"
            alt="user_blank"
          />
        </div> */}
        {/* <MypageActivityList /> */}
        {/* <div className="activityList">
          {this.state.userInfo.map(info => {
            return (
              <div className="box">
                <strong>{info.likecount}</strong>
                <p>{info.name}</p>
              </div>
            );
          })}
        </div> */}
        {/* <ul className="tabList">
          {CATEGORY_ARR.map((category, idx) => {
            return (
              <li key={idx} onClick={() => this.clickHandler(idx + 1)}>
                {category}
              </li>
            );
          })}
        </ul>
        {/* <div className="bigBox"> */}
        {/* {MAPPING_OBJ[currentId]} */}
        {/* <div>
          <div className="wrapper">
            <div className="content">{MAPPING_OBJ[currentId]}</div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Mypage;
