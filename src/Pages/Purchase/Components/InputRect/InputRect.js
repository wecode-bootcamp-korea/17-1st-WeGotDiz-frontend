import React, { Component } from 'react';
import './InputRect.scss';

class InputRect extends Component {
  render() {
    const { label, placeholder, onChange, name } = this.props;
    return (
      <div className="inputRect">
        <label className="label">
          {label}
          <input placeholder={placeholder} onChange={onChange} name={name} />
        </label>
      </div>
    );
  }
}

export default InputRect;
