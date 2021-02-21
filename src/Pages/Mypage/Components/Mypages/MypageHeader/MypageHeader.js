import React, { Component } from 'react';
import './MypageHeader.scss';

class MypageHeader extends Component {
  render() {
    return (
      <div className="MypageHeader">
        <h1>허혜성</h1>
        <p>개인회원</p>
        <img
          className="userImg"
          src="https://media.vlpt.us/images/hyehye/post/b33666d0-2d98-4f96-8b5f-0777deb7c8de/userDefaultImage.png"
          alt="user_blank"
        />
        <div className="activityList">
          {this.props.userInfo.map(info => {
            return (
              <div className="box" key={info.id}>
                <strong>{info.likecount}</strong>
                <p>{info.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MypageHeader;
