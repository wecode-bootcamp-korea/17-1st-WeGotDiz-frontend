import React, { Component } from 'react';

import Banner from './Components/Banner/Banner';
import Tabs from './Components/Tabs/Tabs';
import Aside from './Components/Aside/Aside';
import Story from './Components/Story/Story';
import Policy from './Components/Policy/Policy';
import Community from './Components/Community/Community';
import './Product.scss';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      productData: {},
      infoData: {},
    };
  }

  componentDidMount() {
    this.handleData();
  }

  handleData = () => {
    fetch('http://10.58.1.217:8000/product/28')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res.data,
          infoData: res.data.info_box,
        });
      });
  };

  handleTab = id => {
    this.setState({
      currentId: id,
    });
  };

  render() {
    const { handleTab } = this;
    const { currentId, productData, infoData } = this.state;

    return (
      <main className="product">
        {productData && (
          <>
            <Banner productData={productData} />
            <Tabs handleTab={handleTab} tabData={productData.tab_names} />
            <div className="contentsContainer">
              <content className="contents">{MAPPING_TAB[currentId]}</content>
              <Aside productData={productData} infoData={infoData} />
            </div>
          </>
        )}
      </main>
    );
  }
}

const MAPPING_TAB = {
  1: <Story />,
  2: <Policy />,
  3: <Community />,
};

export default Product;
