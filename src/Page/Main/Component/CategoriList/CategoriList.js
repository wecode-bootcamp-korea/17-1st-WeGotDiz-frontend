import React, { Component } from 'react';
import Categori from './Categori';

import './CategoriList.scss';

class CategoriList extends Component {
  constructor() {
    super();
    this.state = {
      categoriData: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/CategoriListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoriData: data.test,
        });
      });
  };

  render() {
    const { categoriData } = this.state;
    return (
      <div className="categoriContainer">
        <div className="categoriList">
          {categoriData.map((data, index) => {
            return <Categori categori={data} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CategoriList;
