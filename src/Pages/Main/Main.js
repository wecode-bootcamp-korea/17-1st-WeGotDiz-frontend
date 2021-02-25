import React, { Component } from 'react';
import MainSlider from './Components/Slider/MainSlider';
import PlanerBar from './Components/Planer/PlanerBar';
import CategoryList from './Components/CategoryList/CategoryList';
import MainProductList from './Components/ProductList/MainProductList';
import { CATEGORYLIST_DATA } from '../../config';

import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      categoryData: [],
      products: [],
      items: 6,
      preItems: 0,
      categoryName: '전체보기',
      endYN: '1',
      order: 'recommend',
      queryResult: '',
    };
  }

  componentDidMount = () => {
    this.categoryMount();
    this.mainProduct();
  };

  categoryMount = () => {
    fetch(CATEGORYLIST_DATA, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryData: data.test,
        });
      });
  };

  mainProduct = () => {
    const { preItems, items } = this.state;
    fetch('http://10.58.6.78:8000/product/main', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        let result = res.DATA;
        let realResult = result.slice(preItems, items);
        this.setState({
          products: [...this.state.products, ...realResult],
        });
      });
    window.addEventListener('scroll', this.infiniteScroll, true);
  };

  categoryClick = category => {
    if (category.path === 'main') {
      fetch(`http://10.58.6.78:8000/product/main`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            products: res.DATA,
            categoryName: category.name,
          });
        });
    } else if (category.path === 'category') {
      fetch(`http://10.58.6.78:8000/product/main/${category.id}`, {
        method: 'GET',
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            products: res.DATA,
            categoryName: category.name,
          });
        });
    }
  };

  infiniteScroll = () => {
    const { documentElement, body } = document;
    const { items } = this.state;
    let scrollHeight = Math.max(
      documentElement.scrollHeight,
      body.scrollHeight
    );
    let scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
    let clientHeight = documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      this.setState({
        preItems: items,
        items: items + 6,
      });
      this.componentDidMount();
    }
  };

  selectFirst = first => {
    this.setState(
      {
        endYN: first,
      },
      () => {
        fetch(`http://10.58.6.78:8000/product/main${this.selectChoice()}`, {
          method: 'GET',
        })
          .then(res => res.json())
          .then(res => {
            this.setState({
              products: res.DATA,
            });
          });
      }
    );
  };

  selectSecond = second => {
    this.setState(
      {
        order: second,
      },
      () => {
        fetch(`http://10.58.6.78:8000/product/main${this.selectChoice()}`, {
          method: 'GET',
        })
          .then(res => res.json())
          .then(res => {
            this.setState({
              products: res.DATA,
            });
          });
      }
    );
  };

  selectChoice = () => {
    let newObj = {
      endYN: this.state.endYN,
      order: this.state.order,
    };
    let result = Object.entries(newObj).map(e => e.join('='));
    let realResult = '?' + result.join('&');
    return realResult;
  };

  render() {
    const { categoryData, categoryName, products } = this.state;

    return (
      <div>
        <MainSlider />
        <PlanerBar />
        <CategoryList
          categoryData={categoryData}
          categoryClick={this.categoryClick}
        />
        <MainProductList
          cateProducts={products}
          categoryName={categoryName}
          selectFirst={this.selectFirst}
          selectSecond={this.selectSecond}
        />
      </div>
    );
  }
}

export default Main;
