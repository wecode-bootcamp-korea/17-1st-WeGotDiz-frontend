import React, { Component } from 'react';
import CheckboxRound from '../CheckboxRound/CheckboxRound';
import './AlertInfo.scss';

class AlertInfo extends Component {
  constructor() {
    super();
    this.state = {
      isDetailsClicked: false,
    };
  }

  handleDetails = e => {
    const { isDetailsClicked } = this.state;

    this.setState({
      isDetailsClicked: !isDetailsClicked,
    });
  };

  render() {
    const { isDetailsClicked } = this.state;
    const { title, content, details, detailsInfo } = this.props;

    return (
      <div className="alertInfo">
        <dl>
          <dt className="checkboxContainer">
            <CheckboxRound label={title} />
          </dt>
          <dd className="checkboxInfo">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </dd>
          {details && (
            <dd className="checkboxInfoDetails">
              <button
                className="checkboxInfoDetailsBtn"
                onClick={this.handleDetails}
              >
                {details}
                <i className="fas fa-chevron-down" />
              </button>
              {isDetailsClicked && (
                <div className="checkboxInfoDetailsText">
                  <p>{detailsInfo}</p>
                </div>
              )}
            </dd>
          )}
        </dl>
      </div>
    );
  }
}

export default AlertInfo;
