import React, { Component } from 'react';
import Funded from '../Funded';
//import Mypage from '../../Mypage';
import './FundingList.scss';

class FundingList extends Component {
  render() {
    console.log('hi');
    console.log('3. propsFundingList >>>', this.props);
    const { fundDataList } = this.props;
    return (
      <div>
        <div className="fundingList">
          {fundDataList.map(funded => {
            return (
              <Funded
                key={funded.id}
                img={funded.imgUrl}
                percent={funded.percent}
                price={funded.price}
                date={funded.date}
                title={funded.title}
                company={funded.makerCompany}
                catagory={funded.catagory}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default FundingList;
