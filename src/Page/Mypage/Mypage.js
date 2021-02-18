import React, { Component } from 'react';
import './Mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: [
        {
          id: 1,
          like: 0,
          name: '펀딩',
        },
        {
          id: 2,
          like: 1,
          name: '좋아요',
        },
        {
          id: 3,
          like: 2,
          name: '팔로워',
        },
        {
          id: 4,
          like: 3,
          name: '팔로잉',
        },
      ],
    };
  }

  render() {
    return (
      <div className="myPageContainer">
        <div className="topInfo">
          <h1>허혜성</h1>
          <p>개인회원</p>
          <img
            className="userImg"
            src="https://www.wadiz.kr/resources/Images/img_blank.png"
            alt="user_blank"
          />
        </div>

        <div className="activityList">
          {this.state.userInfo.map(info => {
            return (
              <div className="fullInfo">
                <div className="shortInfo">
                  <div>{info.like}</div>
                  <div>{info.name}</div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="tabList">
          <p>테스트</p>
        </div>
      </div>
    );
  }
}

export default Mypage;
