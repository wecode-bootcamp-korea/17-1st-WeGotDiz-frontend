import React, { Component } from 'react';
//import Funded from './Funded/Funded';
//import Liked from './Liked/Liked';
import FundingList from './Funded/FundingList/FundingList';
import LikeList from './Liked/LikeList/LikeList';
import './Mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      userInfo: [
        {
          id: 1,
          likecount: 0,
          name: '펀딩',
        },
        {
          id: 2,
          likecount: 1,
          name: '좋아요',
        },
        {
          id: 3,
          likecount: 2,
          name: '팔로워',
        },
        {
          id: 4,
          likecount: 3,
          name: '팔로잉',
        },
      ],
      likeList: [],
      fundingList: [],
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
      .then(fundData => {
        this.setState({
          fundingList: fundData,
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
    const { currentId } = this.state;
    const MAPPING_OBJ = {
      1: <FundingList fundData={this.state.fundingList} />,
      2: <LikeList likeData={this.state.likeList} />,
    };
    const CATEGORY_ARR = ['펀딩한', '좋아한'];
    return (
      <div className="myPage">
        <div className="topInfo">
          <h1>허혜성</h1>
          <p>개인회원</p>
          <img
            className="userImg"
            src="https://media.vlpt.us/images/hyehye/post/b33666d0-2d98-4f96-8b5f-0777deb7c8de/userDefaultImage.png"
            alt="user_blank"
          />
        </div>
        <div className="activityList">
          {this.state.userInfo.map(info => {
            return (
              <div className="box">
                <strong>{info.likecount}</strong>
                <p>{info.name}</p>
              </div>
            );
          })}
        </div>
        <div className="wrapper">
          <ul className="tabList">
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
          <div className="content">{MAPPING_OBJ[currentId]}</div>
          {/* </div> */}
        </div>
      </div>
    );
  }
}

export default Mypage;
