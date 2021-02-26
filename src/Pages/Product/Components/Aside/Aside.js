import React, { Component } from 'react';
import Progressbar from '../../../../Components/Progressbar/Progressbar';
import './Aside.scss';

class Aside extends Component {
  constructor() {
    super();
    this.state = {
      isMakerInfoClicked: false,
    };
  }

  handleMakerInfo = () => {
    const { isMakerInfoClicked } = this.state;

    this.setState({
      isMakerInfoClicked: !isMakerInfoClicked,
    });
  };

  render() {
    const { handleMakerInfo } = this;
    const { isMakerInfoClicked } = this.state;
    const {
      makerInfoData,
      makerLevelData,
      isLikeClicked,
      handleLike,
      likes,
      goToPurchase,
    } = this.props;

    const { maker_name, days_left } = this.props.productData;

    const {
      achieved_rate,
      total_amount,
      total_supporters,
    } = this.props.infoData;

    const done = String(days_left)[0] === '-';

    return (
      <aside>
        {done ? (
          <p className="daysLeft">마감</p>
        ) : (
          <p className="daysLeft">{days_left}일 남음</p>
        )}
        <Progressbar percent={achieved_rate} />
        <ul className="productNumInfo">
          <li className="achievement">
            <span>{Math.floor(achieved_rate)}</span>% 달성
          </li>
          <li className="achievement">
            <span>{Math.floor(total_amount).toLocaleString()}</span>원 펀딩
          </li>
          <li className="achievement">
            <span>{total_supporters}</span>
            명의 서포터
          </li>
        </ul>
        {done ? (
          <button onClick={goToPurchase} className="fundingBtn">
            펀딩하기
          </button>
        ) : (
          <button className="fundingBtn" disabled>
            펀딩 마감
          </button>
        )}
        <div className="btnWrapper">
          <button className="likeBtn" onClick={handleLike}>
            <i
              className="fas fa-heart"
              id={isLikeClicked ? 'like' : 'unlike'}
            />
            {likes}
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
            {makerLevelData.map((data, idx) => {
              return (
                <div className="makerGraph" key={idx}>
                  <span className="graphTitle">{data.name}</span>
                  <Progressbar percent={Math.floor(data.level) * 10} />
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
                {makerInfoData.map((info, idx) => {
                  return (
                    <div key={idx}>
                      <p className="makerInfoTitle">{info.title}</p>
                      <p className="makerInfoDetails">
                        <div
                          dangerouslySetInnerHTML={{ __html: info.details }}
                        />
                      </p>
                    </div>
                  );
                })}
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
