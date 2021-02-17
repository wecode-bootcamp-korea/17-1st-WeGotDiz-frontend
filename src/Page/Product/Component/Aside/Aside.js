import React, { Component } from 'react';
import './Aside.scss';

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      like: false,
      likeNum: 172,
      makerInfo: false,
    };
  }

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
    const { handleLike, goToPurchase, handleMakerInfo } = this;
    const { like, likeNum, makerInfo } = this.state;
    const { data } = this.props;

    return (
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
            {data &&
              data.map(info => {
                return (
                  <div className="makerGraph" key={info.id}>
                    <p className="graphTitle">{info.graphTitle}</p>
                    <div className="graphStatus" id={info.level} />
                  </div>
                );
              })}
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
    );
  }
}

export default Aside;
