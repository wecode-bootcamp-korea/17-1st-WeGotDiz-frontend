import React, { Component } from 'react';

import Header from './Components/Header/Header';
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
      makerLevelData: [],
      tabsData: [],
      isLikeCliked: false,
    };
  }

  componentDidMount() {
    this.handleData();
  }

  handleLike = () => {
    const { isLikeCliked } = this.props;

    this.setState({
      isLikeCliked: !isLikeCliked,
    });

    isLikeCliked
      ? fetch('ip', {
          method: 'POST',
          headers: {
            Authorization: localStorage.getItem.access_token,
          }.then(),
        })
      : fetch('ip', {
          method: 'DELETE',
          headers: {
            Authorization: localStorage.getItem.access_token,
          },
        });
  };

  handleData = () => {
    fetch('/data/productData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res.data,
          infoData: res.data.info_box,
          makerLevelData: res.data.maker_levels,
          tabsData: res.data.tab_names,
        });
      });

    fetch('/data/makerInfoData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          makerInfoData: res,
        });
      });
  };

  handleTab = id => {
    this.setState({
      currentId: id,
    });
  };

  render() {
    const { handleTab, handleLike } = this;
    const {
      currentId,
      productData,
      infoData,
      makerLevelData,
      tabsData,
      makerInfoData,
      isLikeCliked,
    } = this.state;

    return (
      <main className="product">
        {productData && (
          <>
            <Header productData={productData} />
            <Tabs
              handleTab={handleTab}
              tabsData={tabsData}
              currentId={currentId}
            />
            <div className="contentsContainer">
              <content>{MAPPING_TAB[currentId]}</content>
              <Aside
                productData={productData}
                infoData={infoData}
                makerInfoData={makerInfoData}
                makerLevelData={makerLevelData}
                isLikeCliked={isLikeCliked}
                handleLike={handleLike}
              />
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
