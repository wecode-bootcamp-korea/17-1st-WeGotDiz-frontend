import React, { Component } from 'react';
import './InputRound.scss';

class InputRound extends Component {
  render() {
    const { label, placeholder, onChange, name } = this.props;
    return (
      <div className="inputRound">
        <label className="label">
          {label}
          <input placeholder={placeholder} onChange={onChange} name={name} />
        </label>
      </div>
    );
  }
}

export default InputRound;
