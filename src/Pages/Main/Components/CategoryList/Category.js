import React, { Component } from 'react';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      cateName: '',
    };
  }

  render() {
    const { category, categoryClick } = this.props;
    // console.log('여긴카테고리' + ca);
    return (
      <div
        className="categoryContent"
        onClick={() => categoryClick(category.id)}
      >
        <div className="categoryImg">
          <img src={category.img} alt={category.id} />
        </div>
        <span className="categoryName">{category.name}</span>
      </div>
    );
  }
}

export default Category;
