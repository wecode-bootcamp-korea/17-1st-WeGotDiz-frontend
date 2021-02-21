import React, { Component } from 'react';
import MypageHeader from './Components/Mypages/MypageHeader/MypageHeader';
import MypageList from './Components/Mypages/MypageList/MypageList';
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
    console.log('1. stateFund >>>', this.state.fundDataList);
    // const { currentId } = this.state;
    return (
      <div className="myPage">
        <MypageHeader userInfo={this.state.userInfo} />
        <MypageList
          likeData={this.state.likeList}
          fundDataList={this.state.fundDataList}
          clickHandler={this.clickHandler}
        />
      </div>
    );
  }
}

export default Mypage;
