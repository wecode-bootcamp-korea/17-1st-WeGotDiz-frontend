import React, { Component } from 'react';

class SearchText extends Component {
  render() {
    const { text } = this.props;
    return (
      <li className="suggestContent">
        <span>{text}</span>
        <button className="suggestContentBtn">
          <i className="fas fa-times" />
        </button>
      </li>
    );
  }
}

export default SearchText;
