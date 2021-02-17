import React, { Component } from 'react';

import Story from './components/Story/Story';
import Policy from './components/Policy/Policy';
import News from './components/News/News';
import Community from './components/Community/Community';
import Supporter from './components/Supporter/Supporter';
import './Product.scss';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      like: false,
      likeNum: 172,
      makerInfo: false,
    };
  }

  handleTab = id => {
    this.setState({
      currentId: id,
    });
  };

  handleLike = () => {
    const { like, likeNum } = this.state;
    this.setState({
      like: !like,
      likeNum: like ? likeNum - 1 : likeNum + 1,
    });
  };

  handleMakerInfo = () => {
    const { makerInfo } = this.state;
    this.setState({
      makerInfo: !makerInfo,
    });
  };

  goToPurchase = () => {
    this.props.history.push('/purchase');
  };

  render() {
    const { handleTab, handleLike, goToPurchase, handleMakerInfo } = this;
    const { like, likeNum, makerInfo } = this.state;
    return (
      <main className="product">
        <div className="titleContainer">
          <p className="category">반려동물</p>
          <p className="productTtile">
            당기는 산책 습관? 베이컨박스 신제품, 산책 안전벨트로 #충격완화
          </p>
          <div className="titleBackground" />
        </div>
        <ul className="tabs">
          <li onClick={() => handleTab(1)} className="tab">
            스토리<span className="countTotal"></span>
          </li>
          <li onClick={() => handleTab(2)} className="tab">
            반환∙정책<span className="countTotal"></span>
          </li>
          <li onClick={() => handleTab(3)} className="tab">
            새소식<span className="countTotal">4</span>
          </li>
          <li onClick={() => handleTab(4)} className="tab">
            커뮤니티<span className="countTotal">6</span>
          </li>
          <li onClick={() => handleTab(5)} className="tab">
            서포터<span className="countTotal">759</span>
          </li>
        </ul>
        <div className="contentsContainer">
          <content className="contents">
            {MAPPING_OBJ[this.state.currentId]}
          </content>
          <aside>
            <p className="daysLeft">1일 남음</p>
            <ul className="productNumInfo">
              <li className="achievement">
                <span>1752</span>% 달성
              </li>
              <li className="totalAmmount">
                <span>17,528,010</span>원 펀딩
              </li>
              <li className="supporters">
                <span>761</span>명의 서포터
              </li>
            </ul>
            <button onClick={goToPurchase} className="fundingBtn">
              펀딩하기
            </button>
            <div className="btnWrapper">
              <button className="likeBtn" onClick={handleLike}>
                <i className="fas fa-heart" id={like ? 'like' : 'unlike'} />
                {likeNum}
              </button>
              <button>공유하기</button>
            </div>
            <div className="fundingDescription">
              <i className="fas fa-exclamation-circle" />
              <span>펀딩하기는 쇼핑하기가 아닙니다!</span>
              <a href="https://help.wadiz.kr/ko/articles/1092633-%ED%8E%80%EB%94%A9%ED%95%98%EA%B8%B0%EB%8A%94-%EC%87%BC%ED%95%91%ED%95%98%EA%B8%B0%EA%B0%80-%EC%95%84%EB%8B%99%EB%8B%88%EB%8B%A4">
                자세히 알아보기
              </a>
            </div>
            <p className="makerTitle">메이커 정보</p>
            <div className="makerContainer">
              <div className="makerProfile">
                <img
                  alt="Maker profile"
                  className="makerImg"
                  src="https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/v1484722933/ypd1aluy7j0x7gqhjczv.png"
                />
                <a className="makerName" href="/mypage">
                  주식회사 깃깃
                </a>
              </div>
              <div className="beta">
                <span>BETA</span>
                <i className="far fa-question-circle" />
              </div>
              <div className="makerTrustInfo">
                <div className="makerGraph">
                  <p className="graphTitle">평판</p>
                  <div className="graphStatus off" />
                </div>
                <div className="makerGraph">
                  <p className="graphTitle">소통</p>
                  <div className="graphStatus on" />
                </div>
                <div className="makerGraph">
                  <p className="graphTitle">인기</p>
                  <div className="graphStatus on" />
                </div>
              </div>
              <div className="makerContact">
                <span>메이커 평균 응답 시간</span>
                <span className="makerResponseHours">17시간 이내</span>
                <button className="makerContactBtn">
                  <i className="far fa-comment-dots" /> 메이커에게 문의하기
                </button>
              </div>
              <div className="makerInfo">
                <button className="makerInfoBtn" onClick={handleMakerInfo}>
                  <span>메이커 정보</span>
                  <i className="fas fa-chevron-down" />
                </button>
                {makerInfo && (
                  <div className="makerInfoMore">
                    <p className="makerInfoTitle">메이커 연락처</p>
                    <p className="makerInfoDetails">google@gmail.com</p>
                    <p className="makerInfoDetails">01012345678</p>
                    <p className="makerInfoDetails">카카오 플러스친구 깃깃</p>
                    <p className="makerInfoTitle">SNS</p>
                    <p className="makerInfoDetails">http://www.gitgit.com/</p>
                    <p className="makerInfoDetails">http://lululala.com/</p>
                    <div className="makerInfoSns">
                      <a href="http://www.instagram.com">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
    );
  }
}

const MAPPING_OBJ = {
  1: <Story />,
  2: <Policy />,
  3: <News />,
  4: <Community />,
  5: <Supporter />,
};

const CATEGORY_ARR = ['First, Second, Third'];

export default Product;
