import React, { Component } from 'react';
import Funded from '../Funded';
import './FundList.scss';

class FundList extends Component {
  render() {
    console.log('this.props.fundDataList>>', this.props);
    const { fundList } = this.props;
    return (
      <div className="fundList">
        {fundList.map(fund => {
          return (
            <Funded
              key={fund.id}
              img={fund.imgUrl}
              title={fund.title}
              company={fund.makerCompany}
              catagory={fund.catagory}
            />
          );
        })}
      </div>
    );
  }
}

export default FundList;
