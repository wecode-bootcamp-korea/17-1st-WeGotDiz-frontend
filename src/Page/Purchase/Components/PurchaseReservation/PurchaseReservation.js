import React, { Component } from 'react';
import './PurchaseReservation.scss';

class PurchaseReservation extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="purchaseReservation">
        <dl className="purchaseDetails">
          <dd>[얼리버드] 딥소스 3종 세트 ( 10% 할인 )</dd>
          <dd>
            화이트 딥소스 1개 ( 200g ) 옐로우 딥소스 1개 ( 200g ) 블랙 딥소스
            1개 ( 200g )
          </dd>
          <dd>
            <span>수량 1개</span>
            <span>50,000원</span>
          </dd>
          <dd>
            <span>추가 후원금</span>
            <span>0원</span>
          </dd>
          <dd>
            <span>배송비</span>
            <span>3,000원</span>
          </dd>
          <dd>
            <span>펀딩 금액</span>
            <span>50,000 원</span>
          </dd>
          <dd>
            <span>추가 후원금</span>
            <span>0원</span>
          </dd>
          <dd>
            <span>배송비</span>
            <span>3,000원</span>
          </dd>
          <dd>
            <span>최종결제금액</span>
            <span>50,000원</span>
          </dd>
        </dl>
        <div className="supporterInfoWrapper">
          <div className="fundingSupporter">
            <p>펀딩 서포터</p>
            <div className="supporterInfo">
              <p>이름</p>
              <p>이사랑</p>
              <p>이메일</p>
              <p>rosaranglee@gmail.com</p>
              <p>휴대폰 번호</p>
              <p>01042068806</p>
            </div>
          </div>
          <div className="deliveryAddress">
            <p>리워드 배송지</p>
            <div className="address">
              <label>
                이름
                <input />
              </label>
              <label>
                휴대폰 번호
                <input />
              </label>
              <label>
                주소
                <input placeholder="상세주소" />
              </label>
              <label>
                배송 시 요청사항 (선택)
                <input placeholder="ex) 부재시 경비실에 보관해주세요." />
              </label>
            </div>
          </div>
        </div>
        <p>결제 정보</p>
        <p>결제 정보 입력</p>
        <div className="paymentMethod">
          <div className="paymentMethodInput">
            <label>
              <input />
              <input />
              <input />
              <input />
            </label>
            <div>
              <label>
                유효기간
                <input placeholder="MM/YY" />
              </label>
              <label>
                카드 비밀번호
                <input placeholder="앞 2자리" />
              </label>
            </div>

            <label>
              생년월일 (주민번호 앞 6자리)
              <p>무기명 법인카드는 사업자등록번호 10자리를 입력하세요.</p>
              <input />
            </label>
          </div>
          <div>
            <p>결제 예약시 유의사항</p>
            <p>
              결제실행일에 결제자 귀책사유(한도초과, 이용정지 등)로 인하여
              결제가 실패할 수 있으니, 결제수단이 유효한지 한번 확인하세요. 1차
              결제 실패 시 실패일로부터 3 영업일 동안 재 결제를 실행합니다. 결제
              예약 이후, 결제할 카드를 변경하려면 마이페이지 > 나의 펀딩의
              결제정보에서 카드정보를 변경해주세요.
            </p>
          </div>
        </div>
        <div>
          <p>약관 동의</p>
          <dl>
            <dt>
              <label>
                <input type="checkbox" />
              </label>
              전체 동의하기
            </dt>
            <dd>
              <label>
                <input type="checkbox" />
              </label>
              제 3자에 대한 개인정보 제공 동의
            </dd>
            <dd>
              <label>
                <input type="checkbox" />
              </label>
              책임 규정에 대한 동의
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

export default PurchaseReservation;
