import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isloggedIn: true,
      isNavSearch: false,
      isSuggestLeft: true,
      isSuggestRight: false,
      searchText: '',
      searchArr: [],
    };
  }

  //검색 input시 드롭다운 생성
  handleSuggestDisplayOn = () => {
    this.setState({
      isNavSearch: true,
    });
  };

  handleSuggestDisplayOff = () => {
    this.setState({
      isNavSearch: false,
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
      searchText: e.target.value,
    });
  };

  addSearch = () => {
    const { searchText, searchArr } = this.state;

    const newComment = {
      searchId: Date.now(),
      searchText: searchText,
    };

    const newComments = [...searchArr, newComment];
  };

  render() {
    const { isNavSearch, searchText, isloggedIn } = this.state;
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
                    <Link to="/">펀딩하기</Link>
                  </span>
                </li>
                <li className="navMenuLink">
                  <span>
                    <Link to="/">투자하기</Link>
                  </span>
                </li>
                <li className="navMenuLink">
                  <span>
                    <Link to="/">스타트업 찾기</Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="navRight">
              <div className="navSearchContainer">
                <form className="navSearchForm">
                  <i className="fas fa-search"></i>
                  <input
                    name="isNavSearch"
                    className="navSearch"
                    onClick={this.handleSuggestDisplayOn}
                    onChange={this.handleSearchChange}
                    value={searchText}
                    // onBlur={this.handleSuggestDisplayOff}
                    placeholder="어떤 프로젝트를 찾고 계신가요?"
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
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
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
                  <Link to="/mypage"></Link>
                </span>
              )}

              <span className="navJoin">
                <Link to={isloggedIn ? '/' : '/login'}>
                  {isloggedIn ? '로그아웃' : '로그인'}
                </Link>
              </span>
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
