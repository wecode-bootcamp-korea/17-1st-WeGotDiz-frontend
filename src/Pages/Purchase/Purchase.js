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
      quantity: 1,
      extraFunding: 0,
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
          productData: res.product_info,
          rewardData: res.reward_list,
        });
      });
  };

  handleQuantity = e => {
    this.setState({
      quantity: e.target.value,
    });
  };

  addQuantity = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
  };

  subtractQuantity = () => {
    const { quantity } = this.state;
    this.setState({
      quantity: 1 < quantity - 1 ? quantity - 1 : 1,
    });
  };

  handleModal = () => {
    document.body.style.overflow = 'unset';
    this.setState({
      isModalOn: false,
    });
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

  handleChecked = () => {};

  handleReward = () => {};

  handleExtraFunding = e => {
    this.setState({
      extraFunding: e.target.value,
    });
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
      quantity,
      extraFunding,
    } = this.state;

    const {
      handleModal,
      handleChooseReward,
      handleSubmit,
      goToStory,
      handleQuantity,
      addQuantity,
      subtractQuantity,
      handleExtraFunding,
    } = this;

    return (
      <div className="purchase">
        {isModalOn && (
          <AlertModal handleModal={handleModal} goToStory={goToStory} />
        )}
        <ProductHeader goToStory={goToStory} productData={productData} />
        <PurchaseStep
          isChooseRewardShow={isChooseRewardShow}
          isReservationShow={isReservationShow}
          isPurchaseCompleted={isPurchaseCompleted}
        />
        {isChooseRewardShow && (
          <ChooseReward
            handleChooseReward={handleChooseReward}
            rewardData={rewardData}
            quantity={quantity}
            handleQuantity={handleQuantity}
            addQuantity={addQuantity}
            subtractQuantity={subtractQuantity}
            handleExtraFunding={handleExtraFunding}
            extraFunding={extraFunding}
          />
        )}
        {isReservationShow && (
          <PurchaseReservation
            handleSubmit={handleSubmit}
            extraFunding={extraFunding}
          />
        )}
        {isPurchaseCompleted && <PurchaseComplete />}
      </div>
    );
  }
}

export default withRouter(Purchase);
