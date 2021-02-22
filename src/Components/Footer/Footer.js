import React, { Component } from 'react';
import FooterMenu from './Components/FooterMenu';
import FooterInfo from './Components/FooterInfo';
import FooterNotice from './Components/FooterNotice';
import MENUDATA from './Components/FooterMenuData';

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
