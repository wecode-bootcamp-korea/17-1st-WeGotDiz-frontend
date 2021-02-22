import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SearchText from './Components/SearchText';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isloggedIn: false,
      isNavSearch: false,
      isSuggestLeft: true,
      isSuggestRight: false,
      text: '',
      searchArr: [],
    };
  }

  //검색 input시 드롭다운 생성
  handleSuggestDisplayOnOff = () => {
    const searchOnOff = !this.state.isNavSearch;
    this.setState({
      isNavSearch: searchOnOff,
    });
  };

  //검색드롭다운 왼쪽 오른쪽 버튼
  handleSuggestBtn = e => {
    if (e.target.name === 'isSuggestLeft') {
      const isSuggestLeftToggle = !this.state.isSuggestLeft;
      const isSuggestRightToggle = !this.state.isSuggestRight;
      this.setState({
        isSuggestLeft: isSuggestLeftToggle,
        isSuggestRight: isSuggestRightToggle,
      });
    } else if (e.target.name === 'isSuggestRight') {
      const isSuggestLeftToggle = !this.state.isSuggestLeft;
      const isSuggestRightToggle = !this.state.isSuggestRight;
      this.setState({
        isSuggestRight: isSuggestRightToggle,
        isSuggestLeft: isSuggestLeftToggle,
      });
    }
  };

  //검색 값 담기
  handleSearchChange = e => {
    this.setState({
      text: e.target.value,
    });
    e.preventDefault();
  };

  //검색 기록 값 추가
  addSearch = e => {
    const { text, searchArr } = this.state;
    if (e.key === 'Enter' && text) {
      const newComment = {
        searchId: Date.now(),
        searchTexts: text,
      };

      const newComments = [...searchArr, newComment];
      this.setState({
        searchArr: newComments,
      });
      e.preventDefault();
    }
  };
  //로그인테스트

  login = () => {
    this.setState({
      isloggedIn: true,
    });
  };
  //로그아웃
  logOut = () => {
    localStorage.clear();
    console.log('clear 됨');
    this.setState({
      isloggedIn: false,
    });
  };

  render() {
    console.log(this.state.text);
    const { isNavSearch, isloggedIn, searchArr, text } = this.state;
    return (
      <div>
        <header className="navContainer">
          <div className="navInner">
            <div className="navInnerLeft">
              <img
                className="navLogo"
                src="/images/wegotdizLogo.svg"
                alt="wegotdiz_logo"
              />
              <ul className="navMenu">
                <li className="navMenuLink">
                  <span>
                    <Link to="/" className="mainGo">
                      펀딩하기
                    </Link>
                  </span>
                </li>
                <li className="navMenuLink">
                  <span>투자하기</span>
                </li>
                <li className="navMenuLink">
                  <span>스타트업 찾기</span>
                </li>
              </ul>
            </div>
            <div className="navRight">
              <div className="navSearchContainer">
                <form className="navSearchForm">
                  <i className="fas fa-search"></i>
                  <input
                    type="text"
                    name="isNavSearch"
                    className="navSearch"
                    onClick={this.handleSuggestDisplayOnOff}
                    onChange={this.handleSearchChange}
                    onKeyPress={this.addSearch}
                    placeholder="어떤 프로젝트를 찾고 계신가요?"
                    value={text}
                    autoComplete="off"
                  />
                </form>
                <div
                  className={
                    !isNavSearch
                      ? 'navSearchSuggestClose'
                      : 'navSearchSuggestOpen'
                  }
                >
                  <div className="suggestLayer">
                    <div className="suggestLayerTab">
                      <button
                        name="isSuggestLeft"
                        className={
                          this.state.isSuggestLeft
                            ? 'suggestLayerTabBtnOn'
                            : 'suggestLayerTabBtnOff'
                        }
                        onClick={this.handleSuggestBtn}
                      >
                        최근
                      </button>
                      <button
                        name="isSuggestRight"
                        className={
                          !this.state.isSuggestRight
                            ? 'suggestLayerTabBtnOff'
                            : 'suggestLayerTabBtnOn'
                        }
                        onClick={this.handleSuggestBtn}
                      >
                        인기
                      </button>
                    </div>
                    <div className="suggestLayerContent">
                      <div className="suggestLayerContentSet">
                        <ul className="suggestLayerContentList">
                          {searchArr.map((text, index) => {
                            return <SearchText text={text} key={index} />;
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="suggestLayerButton">
                      <button className="suggestDeleteAll">
                        <i className="far fa-trash-alt" />
                        전체삭제
                      </button>
                      <button
                        className="suggestListClosed"
                        onClick={() => {
                          this.setState({
                            isNavSearch: false,
                          });
                        }}
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {isloggedIn && (
                <span className="myPage">
                  <Link to="/mypage">
                    <img
                      className="userPhoto"
                      src="./images/userPhoto.png"
                      alt="profilephoto"
                    />
                  </Link>
                </span>
              )}
              {!isloggedIn && (
                <span className="navJoin" onClick={this.login}>
                  <Link to="/">로그인</Link>
                  {/* 로그인 */}
                </span>
              )}
              {isloggedIn && (
                <span className="navJoin" onClick={this.logOut}>
                  <Link to="/">로그아웃</Link>
                  {/* 로그아웃 */}
                </span>
              )}
              {!isloggedIn && (
                <span className="navJoin">
                  <Link to="/signup">회원가입</Link>
                </span>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Nav;
