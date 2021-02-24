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
      //컴포넌트 연결용
      isModalOn: true,
      isChooseRewardShow: true,
      isReservationShow: false,
      isPurchaseCompleted: false,
      //프로덕트 정보
      id: 0,
      productTitle: '',
      makerName: '',
      makerImage: '',
      //데이터 담는 용
      rewardData: [],
      extraFunding: 0,
      quantity: 1,
    };
  }

  componentDidMount() {
    document.body.style.overflow = 'hidden';
    this.handlePurchaseData();
  }

  incrementCount = () => {
    const { quantity } = this.state;

    this.setState({
      quantity: quantity + 1,
    });
  };

  decrementCount = () => {
    const { quantity } = this.state;

    this.setState({
      quantity: 1 < quantity - 1 ? quantity - 1 : 1,
    });
  };

  // 필요한 함수

  handleModal = () => {
    document.body.style.overflow = 'unset';
    this.setState({
      isModalOn: false,
    });
  };

  handlePurchaseData = () => {
    fetch('/data/purchaseData.json')
      .then(res => res.json())
      .then(res => {
        this.setState({
          id: res.product_info.id,
          productTitle: res.product_info.title,
          makerName: res.product_info.maker_name,
          makerImage: res.product_info.maker_image,
          rewardData: res.reward_list,
        });
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
    const id = this.state;
    this.props.history.push(`API/product/details/${id}`);
  };

  handleCheckedReward = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      rewardData: prevState.rewardData.map(reward =>
        reward.id === +id ? { ...reward, value: e.target.checked } : reward
      ),
    }));
  };

  handleExtraFunding = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleQuantity = e => {
    this.setState = {
      quantity: e.target.value,
    };
  };

  render() {
    const {
      isModalOn,
      isChooseRewardShow,
      isReservationShow,
      isPurchaseCompleted,
      productTitle,
      makerName,
      makerImage,
      rewardData,
      extraFunding,
      rewardPrice,
      quantity,
    } = this.state;

    const {
      incrementCount,
      handleModal,
      handleSubmit,
      goToStory,
      handleCheckedReward,
      handleChooseReward,
      handleQuantity,
      handleExtraFunding,
      decrementCount,
    } = this;

    const selectedReward = rewardData.filter(reward => reward.value);

    return (
      <div className="purchase">
        {isModalOn && (
          <AlertModal handleModal={handleModal} goToStory={goToStory} />
        )}
        <ProductHeader
          goToStory={goToStory}
          productTitle={productTitle}
          makerName={makerName}
          makerImage={makerImage}
        />
        <PurchaseStep
          isChooseRewardShow={isChooseRewardShow}
          isReservationShow={isReservationShow}
          isPurchaseCompleted={isPurchaseCompleted}
        />
        {isChooseRewardShow && (
          <ChooseReward
            incrementCount={incrementCount}
            rewardData={rewardData}
            extraFunding={extraFunding}
            handleCheckedReward={handleCheckedReward}
            handleChooseReward={handleChooseReward}
            selectedReward={selectedReward}
            handleQuantity={handleQuantity}
            quantity={quantity}
            handleExtraFunding={handleExtraFunding}
            decrementCount={decrementCount}
            productTitle={productTitle}
          />
        )}
        {isReservationShow && (
          <PurchaseReservation
            handleChooseReward={handleChooseReward}
            selectedReward={selectedReward}
            handleSubmit={handleSubmit}
            extraFunding={extraFunding}
            rewardPrice={rewardPrice}
          />
        )}
        {isPurchaseCompleted && <PurchaseComplete />}
      </div>
    );
  }
}

export default withRouter(Purchase);
