import React, { Component } from 'react';
import './CheckboxRect.scss';

class CheckboxRect extends Component {
  render() {
    const { label } = this.props;
    return (
      <label className="checkboxRect">
        <span className="label">{label}</span>
        <input type="checkbox" />
        <span className="checkmark" />
      </label>
    );
  }
}

export default CheckboxRect;
