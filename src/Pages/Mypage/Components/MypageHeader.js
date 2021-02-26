import React, { Component } from 'react';
import './MypageHeader.scss';

class MypageHeader extends Component {
  render() {
    const { funding_user_Info, fundingTotalCount, likeTotalCount } = this.props;
    return (
      <div className="mypageHeader">
        {funding_user_Info.map((info, idx) => {
          return (
            <div className="contentHeader" key={idx}>
              <h1>{info.userName}</h1>
              <p>개인회원</p>
              <img
                className="userImg"
                src="./images/userPhoto.png"
                alt="user_blank"
              />
              <ul className="headerText">
                <li>
                  <strong>{fundingTotalCount}</strong>
                  <span>펀딩</span>
                </li>
                <li>
                  <strong>{likeTotalCount}</strong>
                  <span>좋아요</span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MypageHeader;
