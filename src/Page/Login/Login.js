import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      emailError: '',
      pw: '',
      loginError: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  isEmailStatus = email => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };

  onEmailCheck = () => {
    if (!this.isEmailStatus(this.state.email)) {
      this.setState({
        emailError: '이메일 형식이 올바르지 않습니다.',
      });
    } else {
      this.setState({
        emailError: '',
      });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    fetch('', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          localStorage.setItem('access_token', result.access_token);
          this.props.history.push('/main');
        } else {
          this.setState({ loginError: 'error' });
          //alert('실패');
        }
      });
  };

  render() {
    return (
      <div className="loginContainer">
        <h1 className="title">로그인</h1>
        <form onSubmit={this.onSubmit}>
          <input
            onKeyUp={this.onEmailCheck}
            onChange={this.handleInput}
            className="loginId"
            type="text"
            name="email"
            placeholder="이메일 아이디"
          />
          {<div className="errorMessage">{this.state.emailError}</div>}
          <input
            onChange={this.handleInput}
            className="loginPw"
            type="password"
            name="pw"
            placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)"
          />
          {/* {passwordError && (
            <div style={{ color: 'red' }}>
              아이디 또는 비밀번호가 일치하지 않습니다.
            </div>
          )} */}
          {<div className="errorMessage">{this.state.passwordError}</div>}
          <button type="submit" className="loginBtn">
            로그인
          </button>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);
