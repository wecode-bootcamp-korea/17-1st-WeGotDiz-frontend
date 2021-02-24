import React, { Component } from 'react';
import RankProduct from './RankProduct';

import './PlanerBar.scss';

class PlanerBar extends Component {
  constructor() {
    super();
    this.state = {
      rankData: [],
      planData: [],
      prevPlan: 0,
      endPlan: 2,
      page: '1',
      planImg: [
        'http://www.mediafine.co.kr/news/photo/201811/5789_16258_92.jpg',
        'https://contents.sixshop.com/thumbnails/uploadedFiles/27688/product/image_1540739607928_750.jpg',
        'http://weekly.chosun.com/up_fd/wc_News/2618/limg_org/2618_54_02.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR90ZLrkePse6-eqRmQQrgN_UtfPgVyzC_JcQ&usqp=CAU',
        'https://lh3.googleusercontent.com/proxy/xOsJ9BpBKk-jpQ1WQnvrp_aFZORbNZktaTDWHHB6bgrAsdI5xLdmIHNQxS4PvgDYqeghHx_pSaRkop4I6d8Y4DfgH7eCOXsu8qKMtwWSoaaL4DKhQG9UoHlXGfc2_p_ha_yKdaSyybqVDVtGhk1mfvEPfzaohVZJ2ENhOkYOcWvSWUdCziJAvItSa9vh2tpK5nPJV5tBkfznp_IadPS9o0_9I7LC6uKtXMZahaXlRuiT911ENZp2nmL4Y18_RTQppgM5o1eTqnjQ_jVuvx1g1iiHEJnsQocyVUM3MbU6kAjYBfbwVsYdvFex6iWLu1r2F-2piCE0XQ',
        'https://i2.wp.com/sharehows.com/wp-content/uploads/2018/05/800-400-4.jpg?fit=800%2C400&ssl=1',
      ],
    };
  }

  componentDidMount() {
    this.rankDataAdd();
    this.planDataAdd();
  }

  rankDataAdd = () => {
    fetch('http://localhost:3000/data/PlanerRankData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          rankData: data,
        });
      });
  };

  planDataAdd = () => {
    console.log('여긴통과~!~!');
    fetch('http://10.58.1.148:8000/product/main', {
      method: 'GET',
    })
      .then(res => res.json())
      // .then(res => {
      //   console.log(
      //     'zz',
      //     res.data.slice(this.state.prevPlan, this.state.endPlan)
      //   );
      // });

      .then(res => {
        // res.planData;
        let result = res.data.slice(this.state.prevPlan, this.state.endPlan);
        console.log('?? >>>>> ', result);
        this.setState({
          planData: result,
        });
      });
  };

  // ============================================

  // 기획전 페이지 이동

  changePlanData = e => {
    if (e.target.value === '1') {
      this.setState({
        prevPlan: 0,
        endPlan: 2,
      });
    } else if (e.target.value === '2') {
      this.setState({
        prevPlan: 2,
        endPlan: 4,
      });
    } else if (e.target.value === '3') {
      this.setState({
        prevPlan: 4,
        endPlan: 6,
      });
    }
    this.planDataAdd();
  };

  render() {
    const { rankData, planData } = this.state;
    // console.log('ze', this.state.planImg[0]);
    return (
      <header className="planerContainer">
        <section className="planerContainerLeft">
          <div className="planerLeftHeader">기획전</div>
          <div className="planerPageBtnList">
            <button
              className="planerPageBtn"
              value="1"
              onClick={this.changePlanData}
            >
              1
            </button>
            <button
              className="planerPageBtn"
              value="2"
              onClick={this.changePlanData}
            >
              2
            </button>
            <button
              className="planerPageBtn"
              value="3"
              onClick={this.changePlanData}
            >
              3
            </button>
          </div>
          <div className="planerLeftContent">
            {planData.map((data, index) => {
              console.log('뭐하고있어? >>>', data[0].planTitle);
              return (
                <div className="planerContent" key={index}>
                  <div className="planerContentImg">
                    <img src={this.state.planImg[0]} alt="planerProduct" />
                  </div>
                  <div className="planerContentText">
                    <span className="planerTitle">{data[0].planTitle}</span>
                    <div className="planerProductList">
                      {data[0].products.map((subdata, index) => {
                        console.log('알려줘 >>>>', subdata);
                        return (
                          <div
                            className="planerProduct"
                            key={index}
                            onClick={() => {
                              //this.props.history.push(`/product/detail/${subdata.id}`);
                            }}
                          >
                            <div className="planerProductText">
                              <p>{subdata.text}</p>
                              <span className="planerPercent">
                                {subdata.percent}
                              </span>
                              <span className="planercategory">
                                {subdata.category}
                              </span>
                            </div>
                            <div className="planerProductImg">
                              <img src={subdata.img} alt="product" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="planerContainerRight">
          <div className="planerRightHeader">실시간 랭킹</div>
          <div className="planerRightContent">
            <div className="RightContentHeader">
              <span>펀딩하기</span>
              <i className="far fa-question-circle"></i>
            </div>
            {rankData.map((data, index) => {
              return <RankProduct product={data} key={index} />;
            })}
          </div>
        </section>
      </header>
    );
  }
}

export default PlanerBar;
