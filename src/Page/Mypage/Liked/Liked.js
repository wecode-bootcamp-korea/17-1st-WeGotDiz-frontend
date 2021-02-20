import React, { Component } from 'react';
import './Liked.scss';

class Liked extends Component {
  render() {
    console.log('props >>>', this.props);
    const { img, title, company, catagory } = this.props;
    return (
      // <div className="liked">
      <div className="likedBox">
        <div className="imgBox">
          <img src={img} alt={catagory} />
        </div>
        <div className="textBox">
          <h4>{title}</h4>
          <p>{company}</p>
          <p>{catagory}</p>
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default Liked;
