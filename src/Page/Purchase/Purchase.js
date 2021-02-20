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
      isReservationShow: true,
      isPurchaseCompleted: true,
    };
  }

  handleModal = () => {
    this.setState({
      isModalOn: false,
    });
  };

  render() {
    const { isModalOn, isReservationShow, isPurchaseCompleted } = this.state;
    const { handleModal } = this;

    return (
      <div className="purchase">
        {isModalOn && <AlertModal handleModal={handleModal} />}
        <ProductHeader />
        <PurchaseStep />
        <ChooseReward />
        {isReservationShow && <PurchaseReservation />}
        {isPurchaseCompleted && <PurchaseComplete />}
      </div>
    );
  }
}

export default Purchase;
