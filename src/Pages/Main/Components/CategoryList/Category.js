import React, { Component } from 'react';

class Category extends Component {
  render() {
    const { category, categoryClick } = this.props;
    return (
      <div className="categoryContent" onClick={() => categoryClick(category)}>
        <div className="categoryImg">
          <img src={category.img} alt={category.id} />
        </div>
        <span className="categoryName">{category.name}</span>
      </div>
    );
  }
}

export default Category;
