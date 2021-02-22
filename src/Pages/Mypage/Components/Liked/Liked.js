import React, { Component } from 'react';
import './Liked.scss';

class Liked extends Component {
  render() {
    //console.log('this.props.likeDataList>>', this.props);
    const { img, percent, price, title, company, date, catagory } = this.props;
    return (
      <div className="liked">
        <div className="imgBox">
          <img src={img} alt={catagory} />
          <div className="info">
            <div className="leftText">
              <span className="percentBox">{percent}</span>
              <span className="price">{price}</span>
            </div>
            <span className="rightText">{date}</span>
          </div>
        </div>
        <div className="textBox">
          <h4 className="title">{title}</h4>
          <p className="companyName">{company}</p>
          <p className="catagoryName">{catagory}</p>
        </div>
      </div>
    );
  }
}

export default Liked;