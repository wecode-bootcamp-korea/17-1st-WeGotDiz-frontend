import React, { Component } from 'react';
import './AlertInfo.scss';

class AlertInfo extends Component {
  constructor() {
    super();
    this.state = {
      isDetailsClicked: false,
      userExtist: false,
    };
  }

  handleDetails = () => {
    const { isDetailsClicked } = this.state;

    this.setState({
      isDetailsClicked: !isDetailsClicked,
    });
  };

  render() {
    const { isDetailsClicked, userExtist } = this.state;

    return (
      <form className="alertInfo">
        <dl>
          <dt className="checkboxContainer">
            <label className="container">
              펀딩한 리워드는 새롭게 준비하고 있는 제품・서비스입니다.
              <input type="checkbox" />
              <span className="checkmark" />
            </label>
          </dt>
          <dd className="checkboxInfo">
            <p>
              펀딩 후, 리워드를 제작・준비하는 크라우드펀딩 특성상, 품질 이슈가
              발생할 수 있습니다.
            </p>
            <p>
              리워드 품질 이슈 발생 시 반환·정책 - <span>상세 정책</span>을 꼭
              확인해주세요.
            </p>
          </dd>
          {userExtist && (
            <dd className="checkboxInfoDetails">
              <button
                className="checkboxInfoDetailsBtn"
                onClick={this.handleDetails}
              >
                <span>프로젝트 상세 정책</span>
                <i className="fas fa-chevron-down" />
              </button>

              {isDetailsClicked && (
                <div className="checkboxInfoDetailsText">
                  <p>
                    프로젝트 상세 정책프로젝트 상세 정책프로젝트 상세
                    정책프로젝트 상세 정책프로젝트 상세 정책프로젝트 상세
                    정책프로젝트 상세 정책프로젝트 상세 정책프로젝트 상세
                    정책프로젝트 상세 정책프로젝트 상세 정책프로젝트 상세
                    정책프로젝트 상세 정책프로젝트 상세 정책프로젝트 상세
                    정책프로젝트 상세 정책프로젝트 상세 정책프로젝트 상세
                    정책프로젝트 상세 정책프로젝트 상세 정책프로젝트 상세
                    정책프로젝트 상세 정책프로젝트 상세 정책프로젝트 상세 정책
                  </p>
                </div>
              )}
            </dd>
          )}
        </dl>
      </form>
    );
  }
}

export default AlertInfo;
