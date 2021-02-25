import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  goTop = () => {
    window.scrollTo(0, 800);
  };
  render() {
    const { products } = this.props;
    return (
      <main className="productList">
        {products.map(data => {
          return (
            <Product
              id={data.id}
              img={data.thumbnail}
              text={data.title}
              category={data.category}
              brand={data.maker_info_name}
              percent={Math.floor(data.achieved_rate)}
              price={Math.floor(data.toal_amount).toLocaleString()}
              date={data.closing_date}
              key={data.id}
            />
          );
        })}
        <button className="mainTopBtn" onClick={() => this.goTop()}>
          <i class="fas fa-arrow-up"></i>
        </button>
      </main>
    );
  }
}

export default ProductList;
