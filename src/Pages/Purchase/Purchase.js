import React, { Component } from 'react';
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
      rewardData: [],
    };
  }

  componentDidMount() {
    this.handleData();
  }

  handleData = () => {
    fetch('/data/rewardData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          rewardData: res,
        });
      });
  };

  handleModal = () => {
    this.setState({
      isModalOn: false,
    });
  };

  handleReward = () => {
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
      isReservationShow,
      isPurchaseCompleted,
      isChooseRewardShow,
      rewardData,
    } = this.state;
    const {
      handleModal,
      handleReward,
      handleSubmit,
      goToStory,
      handleData,
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
            handleReward={handleReward}
            handleData={handleData}
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

export default Purchase;
