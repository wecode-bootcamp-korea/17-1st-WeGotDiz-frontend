import React, { Component } from 'react';
// import Category from './Category';

import './CategoryList.scss';

class CategoryList extends Component {
  constructor() {
    super();
    this.state = {
      // categoryData: [],
    };
  }

  // componentDidMount = () => {
  //   this.categoryMount();
  // };

  //카테고리 mock data로 찍기
  // categoryMount = () => {
  //   fetch('http://localhost:3000/data/categoryListData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         categoryData: data.test,
  //       });
  //     });
  // };

  // category = data => {
  //   // console.log('과연 ? >>>>>' + data);
  //   this.setState({
  //     categoryId: data,
  //   });
  // };

  render() {
    const { categoryData } = this.props;
    return (
      <>
        <div className="categoryContainer">
          <div className="categoryList">
            {categoryData.map((data, index) => {
              return (
                <div
                  className="categoryContent"
                  onClick={() => this.props.categoryClick(data)}
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
      </>
    );
  }
}

export default CategoryList;
