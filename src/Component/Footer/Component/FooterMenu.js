import React, { Component } from 'react';

class FooterMenu extends Component {
  render() {
    const { menu } = this.props;
    return (
      <>
        <div className="footerMenuContainer">
          <div className="footerMenuBar">
            {menu.map(el => {
              console.log(el);
              if (el.isItag === false) {
                return <div className="footerMenuContent">{el.name}</div>;
              } else {
                return (
                  <div className="footerMenuContent">
                    {el.name}
                    <i className="fas fa-chevron-down" />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
}

export default FooterMenu;
