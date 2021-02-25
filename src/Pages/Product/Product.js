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
      id: 0,
      likes: 0,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleData();
  }

  handleLike = () => {
    const { id, isLikeCliked } = this.state;

    this.setState({
      isLikeCliked: !isLikeCliked,
    });

    fetch(`http://10.58.6.78:8000/product/${id}/like`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTF9.RivuQ0U93IBQhRIAjPTm50BI3cmsAnPFF80DsNey0ng',
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.message === 'LIKE_SUCCESS') {
          this.setState(
            {
              likes: res.total_likes,
            }
            // () => console.log(this.state.likes)
          );
        } else if (res.message === 'UNLIKE_SUCCESS') {
          this.setState({
            likes: res.total_likes,
          });
        }
      });
  };

  handleData = () => {
    fetch(`http://10.58.6.78:8000/product/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res.data,
          infoData: res.data.info_box,
          makerLevelData: res.data.levels,
          tabsData: res.data.tab_names,
          id: res.data.id,
          likes: res.data.total_likes,
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
      likes,
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
                likes={likes}
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
