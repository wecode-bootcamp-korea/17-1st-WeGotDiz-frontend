import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

class Nav extends Component {
  constructor() {
    super();
    this.state = {
      isNavSearch: false,
      isSuggestLeft: true,
      isSuggestRight: false,
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

  render() {
    console.log('토글값은', this.state.isNavSearch);
    console.log('왼쪽버튼은?', this.state.isSuggestLeft);
    console.log('오른쪽버튼은?', this.state.isSuggestRight);
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
                    onFocus={this.handleSuggestDisplayOn}
                    onBlur={this.handleSuggestDisplayOff}
                    placeholder="어떤 프로젝트를 찾고 계신가요?"
                  />
                </form>
                <div
                  className="navSearchSuggestOpen"
                  style={!this.state.isNavSearch ? { display: 'none' } : null}
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
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
                          <li className="suggestContent">
                            <span>피카츄 라이츄</span>
                            <button className="suggestContentBtn">
                              <i className="fas fa-times" />
                            </button>
                          </li>
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
                      <button className="suggestListClosed">닫기</button>
                    </div>
                  </div>
                </div>
              </div>
              <span className="navJoin">
                <Link to="/login">로그인</Link>
              </span>
              <span className="navJoin">
                <Link to="/signup">회원가입</Link>
              </span>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Nav;
