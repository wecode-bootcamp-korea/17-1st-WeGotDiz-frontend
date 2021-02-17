import React, { Component } from 'react';
import FooterMenu from './Component/FooterMenu';
import FooterInfo from './Component/FooterInfo';
import FooterNotice from './Component/FooterNotice';
import MENUDATA from './Component/FooterMenuData';

import './Footer.scss';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      footerMenu: [],
    };
  }

  componentDidMount() {
    this.setState({
      footerMenu: MENUDATA,
    });
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
