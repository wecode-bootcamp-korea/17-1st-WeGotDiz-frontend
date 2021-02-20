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
              img={data.img}
              text={data.text}
              categori={data.categori}
              brand={data.brand}
              percent={data.percent}
              price={data.price}
              date={data.date}
              key={index}
            />
          );
        })}
      </main>
    );
  }
}

export default ProductList;
