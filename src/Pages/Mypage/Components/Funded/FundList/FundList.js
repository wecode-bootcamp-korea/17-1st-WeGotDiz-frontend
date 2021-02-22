import React, { Component } from 'react';
import Funded from '../Funded';
import './FundList.scss';

class FundList extends Component {
  render() {
    //console.log('this.props.fundDataList>>', this.props);
    const { fundList } = this.props;
    return (
      <div className="fundList">
        {fundList.map(fund => {
          return (
            <Funded
              key={fund.id}
              img={fund.product_image}
              percent={fund.percent}
              price={fund.product_total_amount}
              date={fund.date}
              title={fund.product_itle}
              company={fund.makerCompany}
              catagory={fund.product_catagory}
            />
          );
        })}
      </div>
    );
  }
}

export default FundList;
