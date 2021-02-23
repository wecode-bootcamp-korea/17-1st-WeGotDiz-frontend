import React, { Component } from 'react';
import MainProductList from '../ProductList/MainProductList';
import Category from './Category';

import './CategoryList.scss';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
      categoryId: 1,
    };
  }

  componentDidMount = () => {
    this.categoryMount();
  };

  //카테고리 mock data로 찍기
  categoryMount = () => {
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

  category = data => {
    // console.log('과연 ? >>>>>' + data);
    this.setState({
      categoryId: data,
    });
  };

  render() {
    const { categoryData, categoryId } = this.state;
    // console.log('처음엔? >>>>' + this.state.categoryId);
    // console.log('나중엔? >>>>' + this.state.categoryId);
    return (
      <>
        <div className="categoryContainer">
          <div className="categoryList">
            {categoryData.map((data, index) => {
              return (
                <Category
                  category={data}
                  key={index}
                  categoryClick={this.category}
                />
              );
            })}
          </div>
        </div>
        <MainProductList id={categoryId} />
      </>
    );
  }
}

export default CategoryList;
