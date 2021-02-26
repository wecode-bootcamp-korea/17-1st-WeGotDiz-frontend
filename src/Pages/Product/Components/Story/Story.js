import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Story.scss';

class Story extends Component {
  constructor() {
    super();
    this.state = {
      productData: {},
      openingDate: '',
      closingDate: '',
    };
  }

  componentDidMount() {
    this.handleData();
  }

  handleData = () => {
    fetch(`http://10.58.1.63:8000/product/${this.props.match.params.id}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            productData: res.data,
          },
          () => {
            const { productData } = this.state;
            const openingDate = productData.opening_date
              .slice(0, 10)
              .replaceAll('-', '.');
            const closingDate = productData.closing_date
              .slice(0, 10)
              .replaceAll('-', '.');
            this.setState({
              openingDate: openingDate,
              closingDate: closingDate,
            });
          }
        );
      });
  };

  render() {
    const {
      thumbnail_url,
      description,
      goal_amount,
      tab,
    } = this.state.productData;
    const { openingDate, closingDate } = this.state;

    return (
      <div className="story">
        <img src={thumbnail_url} alt="Product" />
        <p className="productDescription">{description}</p>
        <div className="fundingInfo">
          <p className="goal">
            목표 금액 {Math.floor(goal_amount).toLocaleString()}원
          </p>
          <p className="term">
            펀딩 기간 {openingDate} - {closingDate}
          </p>
          <p className="fundingNotice">
            100% 이상 모이면 펀딩이 성공되며, 펀딩 마감일까지 목표 금액이 100%
            모이지 않으면 결제가 진행되지 않습니다.
          </p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: tab }} />
      </div>
    );
  }
}

export default withRouter(Story);
