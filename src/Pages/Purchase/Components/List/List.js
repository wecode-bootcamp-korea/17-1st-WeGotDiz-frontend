import React, { Component } from 'react';
import './List.scss';
class List extends Component {
  render() {
    const { title, content } = this.props;
    return (
      <dl>
        <dt>{title}</dt>
        <dd>{content}</dd>
      </dl>
    );
  }
}

export default List;
