import React, { Component } from 'react';
import './Progressbar.scss';
class Progressbar extends Component {
  render() {
    const { percent } = this.props;
    return (
      <div className="progressBarAll">
        <div className="progressBarPlay" style={{ width: `${percent}%` }} />
      </div>
    );
  }
}

export default Progressbar;
