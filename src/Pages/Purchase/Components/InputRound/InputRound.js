import React, { Component } from 'react';
import './InputRound.scss';

class InputRound extends Component {
  render() {
    const { label, placeholder } = this.props;
    return (
      <label className="inputRound">
        {label}
        <input placeholder={placeholder} />
      </label>
    );
  }
}

export default InputRound;
