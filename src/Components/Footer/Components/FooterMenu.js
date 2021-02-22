import React, { Component } from 'react';

class FooterMenu extends Component {
  render() {
    const { menu } = this.props;
    return (
      <div className="footerMenuContainer">
        <div className="footerMenuBar">
          {menu.map((footerData, index) => {
            if (footerData.isItag === false) {
              return (
                <div className="footerMenuContent" key={index}>
                  {footerData.name}
                </div>
              );
            } else {
              return (
                <div className="footerMenuContent" key={index}>
                  {footerData.name}
                  <i className="fas fa-chevron-down" />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default FooterMenu;
