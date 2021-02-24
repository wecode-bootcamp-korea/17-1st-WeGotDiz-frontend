import React, { Component } from 'react';

import './CategoryList.scss';

class CategoryList extends Component {
  render() {
    const { categoryData } = this.props;
    return (
      <div className="categoryContainer">
        <div className="categoryList">
          {categoryData.map((data, index) => {
            return (
              <div
                className="categoryContent"
                onClick={() => this.props.categoryClick(data)}
                key={index}
              >
                <div className="categoryImg">
                  <img src={data.img} alt={data.id} />
                </div>
                <span className="categoryName">{data.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CategoryList;
