import React, { Component } from 'react';

import Banner from './Component/Banner/Banner';
import Tabs from './Component/Tabs/Tabs';
import Aside from './Component/Aside/Aside';
import Story from './Component/Story/Story';
import Policy from './Component/Policy/Policy';
import News from './Component/News/News';
import Community from './Component/Community/Community';
import Supporter from './Component/Supporter/Supporter';
import './Product.scss';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      productData: {},
    };
  }

  componentDidMount() {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          tabsData: res.tabsData,
          makerTrustData: res.makerTrustData,
        });
      });
  }

  handleTab = id => {
    this.setState({
      currentId: id,
    });
  };

  render() {
    const { handleTab } = this;
    const { currentId, tabsData, makerTrustData } = this.state;
    return (
      <main className="product">
        <Banner />
        {this.state.productData && (
          <Tabs handleTab={handleTab} data={tabsData} />
        )}
        <div className="contentsContainer">
          <content className="contents">{MAPPING_TAB[currentId]}</content>
          <Aside data={makerTrustData} />
        </div>
      </main>
    );
  }
}

const MAPPING_TAB = {
  1: <Story />,
  2: <Policy />,
  3: <News />,
  4: <Community />,
  5: <Supporter />,
};

export default Product;
