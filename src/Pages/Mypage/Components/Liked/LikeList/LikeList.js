import React, { Component } from 'react';
import Liked from '../Liked';
import './LikeList.scss';

class LikeList extends Component {
  render() {
    const { like_List } = this.props;
    return (
      <div className="likeList">
        {like_List.map(data => {
          return (
            <Liked
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

export default LikeList;
