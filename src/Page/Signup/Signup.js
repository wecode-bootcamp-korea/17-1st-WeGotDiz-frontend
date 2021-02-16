import React, { Component } from 'react';
import './Signup.scss';

class Signup extends Component {
  render() {
    return (
      <div className="signUpContainer">
        <h1>회원가입</h1>
        <div className="agreement">
          <span>전체동의</span>
          <p>
            위갓디즈 서비스 이용약관(필수), 개인정보 수집 ∙ 이용 동의(필수),
          </p>
          <p>마케팅 정보 수신 동의(선택)</p>
        </div>
        <from className="signUpEmail">
          <input className="emailInput" type="text" placeholder="이메일 계정" />
          <button className="emailSubmit">인증하기</button>
          <p>위 이메일로 인증번호가 발송됩니다.</p>
        </from>
        <form>
          <input className="nameInput" type="text" placeholder="이름" />
        </form>
        <from className="passwordInput">
          <input type="password" placeholder="비밀번호 입력" />
          <input type="password" placeholder="비밀번호 확인" />
          <p>영문, 숫자, 특수문자 (!@#$%^&*+=-)를 조합한 8자 이상</p>
        </from>
        <from className="recommendInput">
          <span>추천인 코드(선택사항)</span>
          <input type="text" placeholder="추천인 코드 입력" />
          <p>추천인의 코드를 입력해주세요</p>
          <button className="recommendBtn">완료</button>
        </from>
      </div>
    );
  }
}

export default Signup;
