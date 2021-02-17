import React, { Component } from 'react';
import FooterMenu from './Component/FooterMenu';
import FooterInfo from './Component/FooterInfo';
import FooterNotice from './Component/FooterNotice';

import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      footerMenu: [
        {
          name: '회원가입약관',
          isItag: false,
        },
        {
          name: '서비스이용약관',
          isItag: true,
        },
        {
          name: '개인정보처리방침',
          isItag: false,
        },
        {
          name: '위갓디즈 운영정책',
          isItag: true,
        },
        {
          name: '펀딩 운영정책',
          isItag: true,
        },
        {
          name: '투자 운영정책',
          isItag: true,
        },
        {
          name: '스타트업 찾기 운영정책',
          isItag: true,
        },
        {
          name: '제휴문의',
          isItag: true,
        },
        {
          name: '공지사항',
          isItag: false,
        },
        {
          name: '인재채용',
          isItag: false,
        },
        {
          name: 'SNS',
          isItag: false,
        },
      ],
    };
  }
  render() {
    const { footerMenu } = this.state;
    return (
      <div>
        <footer className="footerContainer">
          <FooterMenu menu={footerMenu} />
          <FooterInfo />
          <FooterNotice />
        </footer>
      </div>
    );
  }
}

export default Footer;
