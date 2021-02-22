import React, { Component } from 'react';
import Liked from '../Liked';
import './LikeList.scss';

class LikeList extends Component {
  render() {
    //console.log('this.props.likeDataList>>', this.props);
    const { likeList } = this.props;
    return (
      <div className="likeList">
        {likeList.map(data => {
          return (
            <Liked
              key={data.product_id}
              img={data.product_image}
              percent={Math.floor(data.product_achieved_rate)}
              price={Math.floor(data.product_total_amount).toLocaleString()}
              title={data.product_title}
              company={data.product_maker_info}
              catagory={data.product_catagory}
            />
          );
        })}
      </div>
    );
  }
}

export default LikeList;
