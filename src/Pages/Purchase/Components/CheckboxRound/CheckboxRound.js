import React, { Component } from 'react';
import './CheckboxRound.scss';

class CheckboxRound extends Component {
  render() {
    const { label, checked, onChange, id } = this.props;
    return (
      <div className="checkboxRound" id={id}>
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

export default CheckboxRound;
