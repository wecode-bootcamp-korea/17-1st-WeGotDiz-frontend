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
      liked: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleData();
  }

  handleData = () => {
    fetch(`http://10.58.6.78:8000/product/${this.props.match.params.id}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res.data,
          infoData: res.data.info_box,
          makerLevelData: res.data.levels,
          tabsData: res.data.tab_names,
          id: res.data.id,
          likes: res.data.total_likes,
          isLikeCliked: res.data.liked,
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
  ㅁ;

  handleLike = () => {
    const { id, isLikeCliked } = this.state;

    fetch(`http://10.58.6.78:8000/product/${id}/like`, {
      method: 'POST',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          likes: res.total_likes,
          isLikeCliked: !isLikeCliked,
        });
      });
  };

  goToPurchase = () => {
    const { id } = this.props.productData;

    fetch('', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
      .then(res => res.json())
      .then(res => {
        if (!localStorage.getItem('access_token')) {
          alert('로그인해주세요!');
          this.props.history.push('/login');
        } else {
          this.props.history.push(`/product/purchase/${id}`);
        }
      });
  };

  handleTab = id => {
    this.setState({
      currentId: id,
    });
  };

  render() {
    const { handleTab, handleLike, goToPurchase } = this;
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
                goToPurchase={goToPurchase}
                handleLike={handleLike}
                productData={productData}
                infoData={infoData}
                makerInfoData={makerInfoData}
                makerLevelData={makerLevelData}
                isLikeCliked={isLikeCliked}
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
