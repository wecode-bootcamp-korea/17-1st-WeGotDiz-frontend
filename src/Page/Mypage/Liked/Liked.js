import React, { Component } from 'react';
import './Liked.scss';

class Liked extends Component {
  render() {
    console.log('props>', this.props);
    const { imgUrl, title, makerCompany, catagory } = this.props;
    return (
      <div className="likedContainer">
        <div className="likedBox">
          <img src={imgUrl} alt={catagory} />
          <div className="textBox">
            <h4>{title}</h4>
            <p>{makerCompany}</p>
            <p>{catagory}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Liked;
