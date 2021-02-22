import React, { Component } from 'react';
import Liked from '../Liked';
import './LikeList.scss';

class LikeList extends Component {
  render() {
    console.log('this.props.likeDataList>>', this.props);
    const { likeList } = this.props;
    return (
      <div className="likeList">
        {likeList.map(like => {
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
