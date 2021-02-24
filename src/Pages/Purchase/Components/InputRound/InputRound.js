import React, { Component } from 'react';
import './InputRound.scss';

class InputRound extends Component {
  render() {
    const { label, placeholder } = this.props;
    return (
      <div className="inputRound">
        <label className="label">
          {label}
          <input placeholder={placeholder} />
        </label>
      </div>
    );
  }
}

export default InputRound;
