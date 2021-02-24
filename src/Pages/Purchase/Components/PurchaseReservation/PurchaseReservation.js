import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import CheckboxRect from '../CheckboxRect/CheckboxRect';
import CheckboxRound from '../CheckboxRound/CheckboxRound';
import InputRound from '../InputRound/InputRound';
import List from '../List/List';
import './PurchaseReservation.scss';

class PurchaseReservation extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      userEmail: '',
    };
  }
  componentDidMount() {
    this.handleUserInfo();
  }

  handleUserInfo = () => {
    fetch('/data/userInfoData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          userName: res.User_info.name,
          userEmail: res.User_info.email,
        });
      });
  };

  handleInputData = e => {
    this.setState({
      name: e.target.value,
    });
  };

  // handlePurchase = () => {
  //   fetch('ip', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       "fullname": ,
  //       "contact_number":,
  //       "delivery_note": ,
  //       "address": ,
  //       "id_quantity": {
  //         "id": ,
  //         "quantity":
  //       }
  //       ,
  //       "total_amount":
  //     }),
  //   });
  // };

  render() {
    const { userName, userEmail } = this.state;
    const { handleSubmit, extraFunding, quantity, price } = this.props;
    // const rewardPrice = (quantity * price * rewardChecked).toLocaleString();
    const totalPice = (extraFunding + 2500).toLocaleString();
    return (
      <div className="purchaseReservation">
        <div className="purchaseInfo">
          <div className="purchaseReward">
            <p className="title">[얼리버드] 딥소스 3종 세트 ( 10% 할인 )</p>
            <p className="details">
              화이트 딥소스 1개 ( 200g ) 옐로우 딥소스 1개 ( 200g ) 블랙 딥소스
              1개 ( 200g )
            </p>
            <div className="amountPriceContainer">
              <span>수량 {quantity}개</span>
              <span>50,000 원</span>
            </div>
            <div className="extraShippingFeeContainer">
              <List title="추가 후원금" content="0원" />
              <List title="배송비" content="2,500원" />
            </div>
          </div>
          <div className="totalPriceContainer">
            <List title="펀딩 금액" content="50,000 원" />
            <List title="추가 후원금" content={extraFunding} />
            <List title="배송비" content={`${totalPice}원`} />
            <dl>
              <dt className="totalPriceTitle">최종결제금액</dt>
              <dd className="totalPrice">{totalPice}원</dd>
            </dl>
          </div>
        </div>
        <div className="supporterInfoWrapper">
          <div className="fundingSupporterContainer">
            <p className="supporterInfoContainerTitle">펀딩 서포터</p>
            <div className="supporterInfo">
              <p className="supporterInfoTitle">이름</p>
              <p className="supporterInfoContent">{userName}</p>
              <p className="supporterInfoTitle">이메일</p>
              <p className="supporterInfoContent">{userEmail}</p>
              <p className="supporterInfoTitle">휴대폰 번호</p>
              <p className="supporterInfoContent">01042068806</p>
              <div className="line" />
              <CheckboxRect label="(필수) 펀딩 진행에 대한 새소식 및 결제 관련 안내를 받습니다." />
            </div>
          </div>
          <div className="shippingAddressContainer">
            <p className="supporterInfoContainerTitle">리워드 배송지</p>
            <div className="addressInfo">
              <InputRound label="이름" />
              <InputRound label="휴대폰 번호" />
              <InputRound label="주소" placeholder="상세주소" />
              <InputRound
                label="배송 시 요청사항 (선택)"
                placeholder="ex) 부재시 경비실에 보관해주세요."
              />
            </div>
          </div>
        </div>
        <p className="supporterInfoContainerTitle">결제 정보</p>
        <p className="supporterInfoContainerSubTitle">결제 정보 입력</p>
        <div className="paymentMethod">
          <div className="paymentMethodInput">
            <div className="cardNum">
              <label className="cardNumInput">
                신용카드번호
                <input name="cardNum1" />
              </label>
              <label className="cardNumInput">
                <input name="cardNum2" />
              </label>
              <label className="cardNumInput">
                <input name="cardNum3" />
              </label>
              <label>
                <input name="cardNum4" />
              </label>
            </div>
            <div className="cardInfo">
              <label className="cardNum" id="dueDate">
                유효기간
                <input placeholder="MM/YY" name="cardDate" />
              </label>
              <label className="cardNum">
                카드 비밀번호
                <input placeholder="앞 2자리" name="cardPw" />
              </label>
            </div>
            <label>
              생년월일 (주민번호 앞 6자리)
              <p>무기명 법인카드는 사업자등록번호 10자리를 입력하세요.</p>
              <input />
            </label>
          </div>
          <div className="notice">
            <header>결제 예약시 유의사항</header>
            <div className="displayFlex">
              <span>-</span>
              <p>
                결제실행일에 결제자 귀책사유(한도초과, 이용정지 등)로 인하여
                결제가 실패할 수 있으니, 결제수단이 유효한지 한번 확인하세요.
              </p>
            </div>
            <div className="displayFlex">
              <span>-</span>
              <p>
                1차 결제 실패 시 실패일로부터 3 영업일 동안 재 결제를
                실행합니다.
              </p>
            </div>
            <div className="displayFlex">
              <span>-</span>
              <p>
                결제 예약 이후, 결제할 카드를 변경하려면 마이페이지 > 나의
                펀딩의 결제정보에서 카드정보를 변경해주세요.
              </p>
            </div>
          </div>
        </div>
        <div className="termsContainer">
          <p className="supporterInfoContainerTitle">약관 동의</p>
          <dl className="terms">
            <dt>
              <CheckboxRound label="전체 동의하기" />
            </dt>
            <dd>
              <CheckboxRound label="제 3자에 대한 개인정보 제공 동의" />
            </dd>
            <dd>
              <CheckboxRound label="책임 규정에 대한 동의" />
            </dd>
          </dl>
        </div>
        <button className="submitPurchaseReservation" onClick={handleSubmit}>
          결제 예약하기
        </button>
      </div>
    );
  }
}

export default withRouter(PurchaseReservation);
