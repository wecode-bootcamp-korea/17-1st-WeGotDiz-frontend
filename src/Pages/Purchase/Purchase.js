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
      isModalOn: false,
      isChooseRewardShow: false,
      isReservationShow: true,
      isPurchaseCompleted: false,
      productData: {},
      rewardData: [],
      amount: 1,
    };
  }

  componentDidMount() {
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

  handleModal = () => {
    const { isModalOn } = this.state;
    document.body.style.overflow = isModalOn ? 'hidden' : 'unset';
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
      amount,
    } = this.state;

    const { handleModal, handleChooseReward, handleSubmit, goToStory } = this;

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
            amount={amount}
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
