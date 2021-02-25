import React, { Component } from 'react';
import './CheckboxRect.scss';

class CheckboxRect extends Component {
  render() {
    const { label, checked, onChange, id } = this.props;
    return (
      <div className="checkboxRect">
        <label className="label">
          <span className="label">{label}</span>
          <input
            id={id}
            type="checkbox"
            onChange={onChange}
            checked={checked}
          />
          <span className="checkmark" />
        </label>
      </div>
    );
  }
}

export default CheckboxRect;
