import React, { Component } from 'react';
import './CheckboxRound.scss';

class CheckboxRound extends Component {
  render() {
    const { label } = this.props;
    return (
      <label className="checkboxRound">
        <span className="label">{label}</span>
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    );
  }
}

export default CheckboxRound;
