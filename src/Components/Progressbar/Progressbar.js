import React, { Component } from 'react';
import './Progressbar.scss';
class Progressbar extends Component {
  render() {
    const { percent } = this.props;
    return (
      <div className="progressBarAll">
        {Number(percent) >= 100 ? (
          <div className="progressBarAll">
            <div className="progressBarPlay" style={{ width: '100%' }} />
          </div>
        ) : (
          <div className="progressBarAll">
            <div className="progressBarPlay" style={{ width: `${percent}%` }} />
          </div>
        )}
      </div>
    );
  }
}

export default Progressbar;
