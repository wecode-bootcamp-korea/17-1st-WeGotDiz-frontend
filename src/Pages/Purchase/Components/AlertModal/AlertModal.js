import React, { Component } from 'react';
import AlertInfo from '../AlertInfo/AlertInfo';
import './AlertModal.scss';

class AlertModal extends Component {
  constructor() {
    super();
    this.state = {
      alertInfoData: [],
      isbtnDisabled: false,
    };
  }

  componentDidMount() {
    this.handleAlertInfo();
  }

  handleAlertInfo = () => {
    fetch('/data/alertInfoData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          alertInfoData: res,
        });
      });
  };

  handleBtn = () => {};

  render() {
    const { alertInfoData, isbtnDisabled } = this.state;
    const { goToStory, handleModal } = this.props;

    return (
      <div className="alertModal">
        <div className="modalContainer">
          <div className="modalMain">
            <button onClick={goToStory} className="backToStoryBtn">
              <i className="fas fa-arrow-left" />
              스토리로 돌아가기
            </button>
            <header>
              <span>잠깐!</span> 결제하기가 아닌 펀딩하기인 이유를 확인하고,
              펀딩하세요.
            </header>
            {alertInfoData.map(info => (
              <AlertInfo
                id={info.id}
                key={info.id}
                title={info.title}
                content={info.content}
                details={info.details}
                detailsInfo={info.detailsInfo}
                checked={info.checked}
              />
            ))}
          </div>
          <button
            onClick={handleModal}
            className="continueToFundingBtn"
            disabled={isbtnDisabled}
          >
            계속해서 펀딩하기
          </button>
        </div>
      </div>
    );
  }
}

export default AlertModal;
