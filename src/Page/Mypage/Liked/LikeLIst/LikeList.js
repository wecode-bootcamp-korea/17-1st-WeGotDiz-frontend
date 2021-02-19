import React, { Component } from 'react';
import Mypage from '../../Mypage';
class LikeList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.likeList.map(like => {
          return (
            <Mypage
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
