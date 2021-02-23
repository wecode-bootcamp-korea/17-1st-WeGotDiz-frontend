import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AlertModal from './Components/AlertModal/AlertModal';
import ChooseReward from './Components/ChooseReward/ChooseReward';
import ProductHeader from './Components/ProductHeader/ProductHeader';
import PurchaseReservation from './Components/PurchaseReservation/PurchaseReservation';
import PurchaseStep from './Components/PurchaseStep/PurchaseStep';
import PurchaseComplete from './Components/PurchaseComplete/PurchaseComplete';
import './Purchase.scss';

class Purchase extends Component {
  constructor() {
    super();
    this.state = {
      isModalOn: true,
      isChooseRewardShow: true,
      isReservationShow: false,
      isPurchaseCompleted: false,
      productData: {},
      rewardData: [],
    };
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    this.handlePurchaseData();
  }

  handlePurchaseData = () => {
    fetch('/data/purchaseData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productData: res.Product_info,
          rewardData: res.Reward_list,
        });
      });
  };

  handleModal = () => {
    this.setState({
      isModalOn: false,
    });
    document.body.style.overflow = 'unset';
  };

  handleChooseReward = () => {
    this.setState({
      isChooseRewardShow: false,
      isReservationShow: true,
    });
    window.scrollTo(0, 0);
  };

  handleSubmit = () => {
    this.setState({
      isReservationShow: false,
      isPurchaseCompleted: true,
    });
    window.scrollTo(0, 0);
  };

  goToStory = () => {
    this.props.history.push('/product/details');
  };

  render() {
    const {
      isModalOn,
      isChooseRewardShow,
      isReservationShow,
      isPurchaseCompleted,
      productData,
      rewardData,
    } = this.state;

    const {
      handleModal,
      handleChooseReward,
      handleSubmit,
      goToStory,
      handlePurchaseData,
    } = this;

    return (
      <div className="purchase">
        {isModalOn && (
          <AlertModal handleModal={handleModal} goToStory={goToStory} />
        )}
        <ProductHeader goToStory={goToStory} />
        <PurchaseStep
          isChooseRewardShow={isChooseRewardShow}
          isReservationShow={isReservationShow}
          isPurchaseCompleted={isPurchaseCompleted}
        />
        {isChooseRewardShow && (
          <ChooseReward
            handleChooseReward={handleChooseReward}
            handleData={handlePurchaseData}
            productData={productData}
            rewardData={rewardData}
          />
        )}
        {isReservationShow && (
          <PurchaseReservation handleSubmit={handleSubmit} />
        )}
        {isPurchaseCompleted && <PurchaseComplete />}
      </div>
    );
  }
}

export default withRouter(Purchase);
