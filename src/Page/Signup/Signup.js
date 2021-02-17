import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Signup.scss';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      checked: false,
      email: '',
      // name: '',
      // pw: '',
      // pwCheck: '',
      emailError: '',
    };
  }
  //체크박스 확인
  handleCheck = e => {
    this.setState({ checked: e.target.checked });
  };

  //이메일 입력 확인
  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isEmail = email => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  onTextValidation = () => {
    let emailError = '';

    if (!this.isEmail(this.state.email)) {
      emailError = '이메일 형식이 올바르지 않습니다.';
    }
    if (emailError === '') {
      this.setState({ emailError });
      return false;
    }
    return true;
  };

  onSubmitEmail = e => {
    e.preventDefault();
    const emailValid = this.onTextValidation();
    if (!emailValid) {
      console.log('check', this.state);
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="signUpContainer">
        <h1>회원가입</h1>
        <div className="agreement">
          <input
            type="checkbox"
            id="agreementCheckbox"
            checkbox={this.state.checkde}
            onChange={this.handleCheck}
          />
          <label for="inputCheckbox" className="checkboxText">
            전체 동의
          </label>
          <p>
            위갓디즈 서비스 이용약관(필수), 개인정보 수집 ∙ 이용 동의(필수),
          </p>
          <p>마케팅 정보 수신 동의(선택)</p>
        </div>

        <form className="signUpEmail" onSubmit={this.onSubmitEmail}>
          <input
            className="emailInput"
            type="text"
            placeholder="이메일 계정"
            name="email"
            onChange={this.handleInput}
          />
          <button className="emailSubmit">인증하기</button>
          <p>위 이메일로 인증번호가 발송됩니다.</p>
          <div style={{ color: 'red' }}>{this.state.emailError}</div>
        </form>

        <form>
          <input
            className="nameInput"
            type="text"
            placeholder="이름"
            name="name"
            onChange={this.handleInput}
          />
        </form>
        <form className="passwordInput">
          <input
            type="password"
            placeholder="비밀번호 입력"
            name="pw"
            onChange={this.handleInput}
          />
          <input
            type="password"
            placeholder="비밀번호 확인"
            name="pwCheck"
            onChange={this.handleInput}
          />
          <p>영문, 숫자, 특수문자 (!@#$%^&*+=-)를 조합한 8자 이상</p>
        </form>
        <button className="recommendBtn">완료</button>
      </div>
    );
  }
}

export default withRouter(Signup);
