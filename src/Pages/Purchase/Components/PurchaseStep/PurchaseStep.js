import React, { Component } from 'react';
import './PurchaseStep.scss';

class PurchaseStep extends Component {
  render() {
    const {
      isChooseRewardShow,
      isReservationShow,
      isPurchaseCompleted,
    } = this.props;

    return (
      <div className="purchaseStep">
        <div className="line" />
        <div className="steps">
          <div className={'step1 ' + (isChooseRewardShow ? 'on' : 'off')}>
            리워드
            <br />
            선택
          </div>
          <div className={'step2 ' + (isReservationShow ? 'on' : 'off')}>
            결제 예약
          </div>
          <div className={'step3 ' + (isPurchaseCompleted ? 'on' : 'off')}>
            소문내기
          </div>
        </div>
      </div>

      // const steps = [
      //   {
      //     id: 1,
      //     compnt: 'isChooseRewardShow',
      //     name: '리워드 선택',
      //   },
      //   {
      //     id: 2,
      //     compnt: 'isReservationShow',
      //     name: '결제 예약',
      //   },
      //   {
      //     id: 3,
      //     compnt: 'isPurchaseCompleted',
      //     name: '소문내기',
      //   },
      // ];

      // return (
      //   <div className="purchaseStep">
      //     <div className="line" />
      //     <div className="steps">
      //       {steps.map(step => (
      //         <div
      //           key={step.id}
      //           className={
      //             `step${step.id}` +
      //             (`this.props.${step.compnt} ` ? ' on' : ' off')
      //           }
      //         >
      //           {step.name}
      //         </div>
      //       ))}
      //     </div>
      //   </div>
    );
  }
}

export default PurchaseStep;
