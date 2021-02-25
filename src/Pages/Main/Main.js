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

  //카테고리 mock data로 찍기
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

  // 전체상품받기
  mainProduct = () => {
    const { preItems, items } = this.state;
    fetch('http://10.58.6.78:8000/product/main', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        let result = res.DATA;
        // let length = result.length;
        // while (length) {
        //   let index = Math.floor(length-- * Math.random());
        //   // let index = Math.floor(length--);
        //   let temp = result[length];
        //   result[length] = result[index];
        //   result[index] = temp;
        // }
        let realResult = result.slice(preItems, items);
        this.setState({
          products: [...this.state.products, ...realResult],
        });
        // console.log('?? >>>>>>>>', res);
        // this.setState({
        //   products: res.DATA,
        // });
      });
    window.addEventListener('scroll', this.infiniteScroll, true);
  };

  //카테고리 리스트 중 누를 시 상품 받기
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
          console.log('뭐가왔냐 카테고리 >>>>> ? ', res);
          this.setState({
            products: res.DATA,
            categoryName: category.name,
          });
        });
    }
  };

  //무한스크롤
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

  //드랍박스 값 필터 받아오기
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
              // categoryName: category.name,
            });
          });
        // this.selectChoice();
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
            console.log('어떄 2 ?  >>>>>>>', res.DATA);
            console.log('어떄 2 ?  >>>>>>>', this.selectChoice());
            this.setState({
              products: res.DATA,
              // categoryName: category.name,
            });
          });
        // this.selectChoice();
      }
    );
  };

  //쿼리 스트링 변환
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
          // categoryId={categoryData}
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
