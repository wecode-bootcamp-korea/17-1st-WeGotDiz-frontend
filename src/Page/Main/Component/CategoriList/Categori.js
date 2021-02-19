import React, { Component } from 'react';

class Categori extends Component {
  constructor() {
    super();
    this.state = {
      cateName: '',
    };
  }

  render() {
    const { categori } = this.props;
    return (
      <div className="categoriContent">
        <div className="categoriImg">
          <img src={categori.img} alt={categori.id} />
        </div>
        <span className="categoriName">{categori.name}</span>
      </div>
    );
  }
}

export default Categori;
