import React, { Component } from 'react';
import Liked from '../Liked';
//import Mypage from '../../Mypage';

class LikeList extends Component {
  render() {
    console.log('props likelist>', this.props.data);
    const { data } = this.props;
    return (
      <div>
        {data.map(like => {
          return (
            <Liked
              key={like.id}
              img={like.imgUrl}
              title={like.title}
              company={like.makerCompany}
              catagory={like.catagory}
            />
          );
        })}
      </div>
    );
  }
}

export default LikeList;
