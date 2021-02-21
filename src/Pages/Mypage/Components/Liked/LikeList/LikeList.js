import React, { Component } from 'react';
import Liked from '../Liked';
import './LikeList.scss';
//import Mypage from '../../Mypage';

class LikeList extends Component {
  render() {
    //console.log('2. propsLikeList>>>', this.props.likeData);
    const { likeData } = this.props;
    return (
      <div className="likeList">
        {likeData.map(like => {
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
