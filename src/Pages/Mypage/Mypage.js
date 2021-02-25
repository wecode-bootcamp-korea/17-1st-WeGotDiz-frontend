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
      funding_user_Info: [],
      funding_list: [],
      like_user_Info: [],
      like_list: [],
    };
  }

  clickHandler = currentId => {
    this.setState({
      currentId,
    });
  };

  componentDidMount() {
    this.fundingDataAdd();
    this.likedDataAdd();
  }

  fundingDataAdd = () => {
    fetch('http://10.58.6.65:8000/user/fundinglist', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          funding_user_Info: res.data.user_info,
          funding_list: res.data.funding_list,
        });
      });
  };

  likedDataAdd = () => {
    fetch('/data/likeData.json', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          like_user_Info: res.data.user_info,
          like_list: res.data.like_list,
        });
      });
  };

  render() {
    const {
      currentId,
      funding_user_Info,
      funding_list,
      like_list,
    } = this.state;
    const CATEGORY_ARR = ['펀딩한', '좋아한'];
    return (
      <div className="myPage">
        <div className="header">
          <MypageHeader
            fundingTotalCount={funding_list.length}
            likeTotalCount={like_list.length}
            funding_user_Info={funding_user_Info}
          />
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
            {currentId === 1 && <FundList fund_List={funding_list} />}
            {currentId === 2 && <LikeList like_List={like_list} />}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Mypage);
