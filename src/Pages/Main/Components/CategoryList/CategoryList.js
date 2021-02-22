import React, { Component } from 'react';
import Category from './Category';

import './CategoryList.scss';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/categoryListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryData: data.test,
        });
      });
  };

  render() {
    const { categoryData } = this.state;
    return (
      <div className="categoryContainer">
        <div className="categoryList">
          {categoryData.map((data, index) => {
            return <Category category={data} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CategoryList;
