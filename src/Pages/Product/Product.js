import React, { Component } from 'react';

import Banner from './Components/Banner/Banner';
import Tabs from './Components/Tabs/Tabs';
import Aside from './Components/Aside/Aside';
import Story from './Components/Story/Story';
import Policy from './Components/Policy/Policy';
import News from './Components/News/News';
import Community from './Components/Community/Community';
import Supporter from './Components/Supporter/Supporter';
import './Product.scss';

class Product extends Component {
  constructor() {
    super();
    this.state = {
      currentId: 1,
      productData: {},
      bannerData: [],
      tabsData: [],
      makerTrustData: [],
    };
  }

  componentDidMount() {
    this.handleData();
  }

  handleData = () => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res,
          bannerData: res.bannerData,
          tabsData: res.tabsData,
          makerTrustData: res.makerTrustData,
          numData: res.numData,
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
    const {
      currentId,
      tabsData,
      makerTrustData,
      productData,
      bannerData,
      numData,
    } = this.state;

    return (
      <main className="product">
        {productData && (
          <>
            <Banner bannerData={bannerData} />
            <Tabs handleTab={handleTab} tabsData={tabsData} />
            <div className="contentsContainer">
              <content className="contents">{MAPPING_TAB[currentId]}</content>
              <Aside makerTrustData={makerTrustData} numData={numData} />
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
  3: <News />,
  4: <Community />,
  5: <Supporter />,
};

export default Product;
