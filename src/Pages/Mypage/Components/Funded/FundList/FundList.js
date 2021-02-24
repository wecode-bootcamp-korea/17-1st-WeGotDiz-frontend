import React, { Component } from 'react';
import Funded from '../Funded';
import './FundList.scss';

class FundList extends Component {
  render() {
    const { fund_List } = this.props;
    return (
      <div className="fundList">
        {fund_List.map(data => {
          return (
            <Funded
              key={data.product_id}
              id={data.product_id}
              img={data.product_image}
              percent={Math.floor(data.product_achieved_rate)}
              price={Math.floor(data.product_total_amount).toLocaleString()}
              title={data.product_title}
              date={data.product_date_countdown}
              company={data.product_maker_info}
              catagory={data.product_catagory}
            />
          );
        })}
      </div>
    );
  }
}

export default FundList;
