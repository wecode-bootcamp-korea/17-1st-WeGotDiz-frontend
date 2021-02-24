import React, { Component } from 'react';
import ProductList from './ProductList';
import './MainProductList.scss';

class MainProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: false,
      searchText: '',
      items: 6,
      preItems: 0,
    };
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
    this.setState({
      searchText: e.target.value,
    });
  };

  //검색 엔터 누를 시 검색 되면서 텍스트 초기화
  handleSearchEnter = e => {
    const { searchText } = this.state;
    if (e.key === 'Enter' && searchText) {
      this.setState({
        searchText: '',
      });
    }
  };

  //셀렉트 박스 값 받기

  handleFirstSelect = e => {
    this.props.selectFirst(e.target.value);
  };
  handleSecondSelect = e => {
    this.props.selectSecond(e.target.value);
  };

  //========================================

  render() {
    const { isSearch, searchText } = this.state;
    const { categoryName } = this.props;

    //필터링
    const filteredProducts = this.props.cateProducts.filter(product => {
      return product.title.toLowerCase().includes(searchText.toLowerCase());
    });
    return (
      <div className="productListContainer">
        <header className="productListHeader">
          <span>{categoryName}</span>
          <form className="productForm">
            <input
              className={!isSearch ? 'productSearchOff' : 'productSearchOn'}
              type="text"
              placeholder="검색"
              onChange={this.handleSearchChange}
              onKeyPress={this.handleSearchEnter}
              value={searchText}
            />
            <button
              className="searchToggleBtn"
              onClick={this.handleSearchToggle}
            >
              <i class="fas fa-search " />
            </button>

            <select
              className="productSelectLeft"
              onChange={this.handleFirstSelect}
            >
              <option value="1">전체</option>
              <option value="2">진행중</option>
              <option value="3">종료된</option>
            </select>
            <select
              className="productSelectRight"
              onChange={this.handleSecondSelect}
            >
              <option value="1">추천순</option>
              <option value="2">인기순</option>
              <option value="3">펀딩액순</option>
              <option value="4">마감임박순</option>
              <option value="5">최신순</option>
              <option value="6">응원참여자순</option>
            </select>
          </form>
        </header>
        <ProductList products={filteredProducts} id={this.props.id} />
      </div>
    );
  }
}

export default MainProductList;
