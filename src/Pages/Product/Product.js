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
      isLikeClicked: false,
      id: 0,
      likes: 0,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleData();
  }

  handleData = () => {
<<<<<<< HEAD
    fetch(`http://10.58.1.63:8000/product/${this.props.match.params.id}`)
=======
    fetch(`http://10.58.1.63:8000/product/${this.props.match.params.id}`, {
      headers: {
        Authorization: localStorage.getItem('access_token'),
      },
    })
>>>>>>> main
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res.data,
          infoData: res.data.info_box,
          makerLevelData: res.data.levels,
          tabsData: res.data.tab_names,
          id: res.data.id,
          likes: res.data.total_likes,
          isLikeClicked: false,
        });
      });

    if (localStorage.getItem('access_token')) {
      fetch(
        `http://10.58.1.63:8000/product/${this.props.match.params.id}/user`,
        {
          headers: {
            Authorization: localStorage.getItem('access_token'),
          },
        }
      )
        .then(res => res.json())
        .then(res => {
          this.setState({
            productData: res.data,
            infoData: res.data.info_box,
            makerLevelData: res.data.levels,
            tabsData: res.data.tab_names,
            id: res.data.id,
            likes: res.data.total_likes,
            isLikeClicked: res.data.liked,
          });
        });
    }

    fetch('/data/makerInfoData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          makerInfoData: res,
        });
      });
  };

  handleLike = () => {
    const { id, isLikeClicked } = this.state;

    if (localStorage.getItem('access_token')) {
      fetch(`http://10.58.1.63:8000/product/${id}/like`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('access_token'),
        },
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            likes: res.total_likes,
            isLikeClicked: !isLikeClicked,
          });
        });
    } else {
      alert('좋아요 기능은 로그인한 회원만 가능합니다!');
    }
  };

  goToPurchase = () => {
    if (localStorage.getItem('access_token')) {
      this.props.history.push(
        `/product/purchase/${this.props.match.params.id}`
      );
    } else {
      alert('로그인해주세요!');
      this.props.history.push('/login');
    }
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
      isLikeClicked,
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
<<<<<<< HEAD
                id={productData.id}
=======
                goToPurchase={goToPurchase}
                handleLike={handleLike}
>>>>>>> main
                productData={productData}
                infoData={infoData}
                makerInfoData={makerInfoData}
                makerLevelData={makerLevelData}
                isLikeClicked={isLikeClicked}
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
