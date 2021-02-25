import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

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

  componentDidMount() {
    const isLoggedIn = localStorage.getItem('access_token');
    if (isLoggedIn) {
      this.setState({ isloggedIn: true });
    }
  }

  // state or props update 무조건 호출되는 라이프사이클 메소드
  //location.pathname이 변경되는 것을 감지하여 setState를 실행시켜주는 것
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      if (localStorage.getItem('access_token')) {
        this.setState({
          isloggedIn: true,
        });
      } else {
        this.setState({
          isloggedIn: false,
        });
      }

      //추후 확인 및 학습을 위한 console.log
      // console.log(
      //   'changed location.pathname >>>',
      //   this.props.location.pathname
      // );
    }
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

  //로그아웃
  logOut = () => {
    localStorage.clear();
    this.setState({
      isloggedIn: false,
    });
  };

  render() {
    const { isNavSearch, isloggedIn, searchArr, text } = this.state;
    console.log({ isloggedIn });
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
                <span className="navJoin">
                  <Link to="/login">로그인</Link>
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

export default withRouter(Nav);
