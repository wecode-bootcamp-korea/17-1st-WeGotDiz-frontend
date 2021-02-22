import React, { Component } from 'react';
import './Aside.scss';

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      isLikeCliked: false,
      isMakerInfoClicked: false,
    };
  }

  handleLike = () => {
    const { isLikeCliked } = this.state;
    const { total_likes } = this.props.productData;

    this.setState({
      isLikeCliked: !isLikeCliked,
      likeNum: isLikeCliked ? total_likes - 1 : total_likes + 1,
    });
  };

  handleMakerInfo = () => {
    const { isMakerInfoClicked } = this.state;

    this.setState({
      isMakerInfoClicked: !isMakerInfoClicked,
    });
  };

  goToPurchase = () => {
    this.props.history.push('/purchase');
  };

  render() {
    const { handleLike, goToPurchase, handleMakerInfo } = this;
    const { isLikeCliked, isMakerInfoClicked } = this.state;
    const {
      today,
      closing_date,
      total_likes,
      maker_name,
      info_box,
    } = this.props.productData;

    return (
      <aside>
        <p className="daysLeft">{today - closing_date}일 남음</p>
        <ul className="productNumInfo">
          {info_box &&
            info_box.map((num, idx) => {
              return (
                <li className="achievement" key={idx}>
                  <span>{num.amount}</span>
                  {num.name}
                </li>
              );
            })}
        </ul>
        <button onClick={goToPurchase} className="fundingBtn">
          펀딩하기
        </button>
        <div className="btnWrapper">
          <button className="likeBtn" onClick={handleLike}>
            <i className="fas fa-heart" id={isLikeCliked ? 'like' : 'unlike'} />
            {total_likes}
          </button>
          <button>공유하기</button>
        </div>
        <div className="fundingDescription">
          <i className="fas fa-exclamation-circle" />
          <span>펀딩하기는 쇼핑하기가 아닙니다!</span>
          <a href="https://help.wadiz.kr/ko/articles/">자세히 알아보기</a>
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
              {maker_name}
            </a>
          </div>
          <div className="beta">
            <span>BETA</span>
            <i className="far fa-question-circle" />
          </div>
          <div className="makerTrustInfo">
            {makerTrustData &&
              makerTrustData.map((info, idx) => {
                return (
                  <div className="makerGraph" key={idx}>
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
            {isMakerInfoClicked && (
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
