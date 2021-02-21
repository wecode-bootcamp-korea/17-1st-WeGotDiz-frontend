import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  render() {
    const { products } = this.props;
    return (
      <main className="productList">
        {products.map((data, index) => {
          return (
            <Product
              id={data.id}
              img={data.thumbnail}
              text={data.title}
              categori={data.category}
              // brand={data.brand}
              percent={Math.floor(data.achieved_rate)}
              price={Math.floor(data.toal_amount).toLocaleString()}
              // date={data.date}
              key={index}
            />
          );
        })}
      </main>
    );
  }
}

export default ProductList;
