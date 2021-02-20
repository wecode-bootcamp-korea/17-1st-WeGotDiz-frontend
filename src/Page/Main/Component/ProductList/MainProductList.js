import React, { Component } from 'react';
import ProductList from './ProductList';
import './MainProductList.scss';

class MainProductList extends Component {
  constructor() {
    super();
    this.state = {
      isSearch: false,
      searchText: '',
      selectLeft: 'none',
      selectRight: 'recommend',
      percent: '',
      products: [],
    };
  }

  componentDidMount() {
    this.productDataAdd();
  }

  productDataAdd() {
    fetch('http://localhost:3000/data/ProductListData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res =>
        this.setState({
          products: res.product,
        })
      );
  }

  //검색창 On Off
  handleSearchToggle = e => {
    this.setState({
      isSearch: true,
    });
    e.preventDefault();
  };

  //검색 체인지
  handleSearchChange = e => {
    this.setState(
      {
        searchText: e.target.value,
      },
      () => {
        // console.log(this.state.searchText);
      }
    );
  };

  //검색 엔터 누를 시
  handleSearchEnter = e => {
    const { searchText } = this.state;
    if (e.key === 'Enter' && searchText) {
      this.goSearch();
    }
  };

  //검색 되면서 텍스트 초기화
  goSearch = () => {
    this.setState({
      searchText: '',
    });
  };

  //========================================

  //셀렉트 박스 값 받기

  handleSelect = e => {
    // console.log('뭘까? >>>>>', e.target.options[e.target.selectedIndex].value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { isSearch, searchText, products } = this.state;
    //필터링 로직
    const filteredProducts = products.filter(product => {
      return product.text.toLowerCase().includes(searchText.toLowerCase());
    });
    console.log('부모/ 뭐가지고옴? >>>' + products);
    console.log('왼쪽의 값 >>>>' + this.state.selectLeft);
    console.log('오른쪽의 값 >>>>' + this.state.selectRight);
    return (
      <div className="productListContainer">
        <header className="productListHeader">
          <span>전체보기</span>
          <form className="productForm">
            <input
              className={!isSearch ? 'productSearchOff' : 'productSearchOn'}
              type="text"
              placeholder="검색"
              onChange={this.handleSearchChange}
              onKeyPress={this.handleSearchEnter}
              value={searchText}
            ></input>
            <button
              className="searchToggleBtn"
              onClick={this.handleSearchToggle}
            >
              <i class="fas fa-search "></i>
            </button>

            <select
              className="productSelectLeft"
              onChange={this.handleSelect}
              name="selectLeft"
            >
              <option value="none">전체</option>
              <option value="ing">진행중</option>
              <option value="end">종료된</option>
            </select>
            <select
              className="productSelectRight"
              onChange={this.handleSelect}
              name="selectRight"
            >
              <option value="recommend">추천순</option>
              <option value="popularity">인기순</option>
              <option value="price">펀딩액순</option>
              <option value="soon">마감임박순</option>
              <option value="new">최신순</option>
              <option value="followers">응원참여자순</option>
            </select>
          </form>
        </header>
        <ProductList products={filteredProducts} />
      </div>
    );
  }
}

export default MainProductList;
