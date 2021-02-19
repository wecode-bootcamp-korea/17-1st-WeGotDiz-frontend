import React, { Component } from 'react';
import './Liked.scss';

class Liked extends Component {
  render() {
    return (
      <div className="likedContainer">
        <div className="likedBox">
          <img src={this.props.imgUrl} alt={this.props.catagory} />
          <div className="textBox">
            <h4>{this.props.title}</h4>
            <p>{this.props.company}</p>
            <p>{this.props.catagory}</p>
          </div>
        </div>
        <div className="likedBox">Liked test</div>
        <div className="likedBox">Liked test</div>
        <div className="likedBox">Liked test</div>
        <div className="likedBox">Liked test</div>
        <div className="likedBox">Liked test</div>
        <div className="likedBox">Liked test</div>
        <div className="likedBox">Liked test</div>
      </div>
    );
  }
}

export default Liked;
