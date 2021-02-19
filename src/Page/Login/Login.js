import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      pw: '',
      emailError: false,
      loginError: '',
    };
  }

  handleInput = e => {
    const { value, name } = e.target;
    console.log('handleInput value >>> ', e.target.value);
    this.setState(
      {
        [name]: value,
      },
      () => this.onEmailCheck()
    );
  };

  onEmailCheck = () => {
    console.log('onEmailCheck value >>> ', this.state.email);

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmailVaild = emailRegex.test(this.state.email);

    this.setState({
      emailError: isEmailVaild,
    });
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
      <section className="login">
        <div className="loginContainer">
          <h1 className="title">로그인</h1>
          <form onSubmit={this.onSubmit}>
            <input
              onChange={this.handleInput}
              className="loginId"
              type="text"
              name="email"
              placeholder="이메일 아이디"
            />
            {
              <div className="errorMessage">
                {this.state.emailError
                  ? '이메일 형식이 올바르지 않습니다.'
                  : ''}
              </div>
            }
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
      </section>
    );
  }
}

export default withRouter(Login);
