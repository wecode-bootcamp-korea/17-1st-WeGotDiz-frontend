import React, { Component } from 'react';
import './CheckboxRound.scss';

class CheckboxRound extends Component {
  render() {
    const { label, checked, onClick } = this.props;
    return (
      <div className="checkboxRound">
        <label className="label">
          <span className="label">{label}</span>
          <input type="checkbox" checked={checked} onClick={onClick} />
          <span className="checkmark" />
        </label>
      </div>
    );
  }
}

export default CheckboxRound;
