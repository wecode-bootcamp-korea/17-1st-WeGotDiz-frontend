import React, { Component } from 'react';

class Category extends Component {
  constructor() {
    super();
    this.state = {
      cateName: '',
    };
  }

  render() {
    const { category } = this.props;
    return (
      <div className="categoryContent">
        <div className="categoryImg">
          <img src={category.img} alt={category.id} />
        </div>
        <span className="categoryName">{category.name}</span>
      </div>
    );
  }
}

export default Category;
