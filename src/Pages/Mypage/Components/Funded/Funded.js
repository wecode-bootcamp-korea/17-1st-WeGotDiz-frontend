import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Progressbar from '../../../../Components/Progressbar/Progressbar';
import './Funded.scss';

class Funded extends Component {
  render() {
    const {
      id,
      img,
      percent,
      price,
      title,
      date,
      company,
      catagory,
    } = this.props;
    return (
      <div
        key={id}
        className="funded"
        onClick={() => this.props.history.push(`/product/details/${id}`)}
      >
        <div className="imgBox">
          <span className="label">리워드</span>
          <img src={img} alt={catagory[0]} />
          <div className="test">
            <Progressbar percent={percent} />
          </div>
          <div className="leftText">
            <span className="percent">{percent}%</span>
            <span className="price">{price}원 달성</span>
            <span className="date">
              {date[0] === '-' ? '종료' : `${date}일 남음`}
            </span>
          </div>
        </div>
        <div className="textBox">
          <h4 className="title">{title}</h4>
          <p className="company">{company}</p>
          <div className="bottomText">
            <span className="catagory">{catagory}</span>
            <span className="reward">성공해야 리워드</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Funded);
