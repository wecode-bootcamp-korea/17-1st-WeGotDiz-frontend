import React, { Component } from 'react';
import './Tabs.scss';

class Tabs extends Component {
  render() {
    const { handleTab } = this.props;
    const { tab_names } = this.props.productData;

    return (
      <ul className="tabs">
        {tab_names &&
          tab_names.map((tab, idx) => {
            return (
              <li
                key={idx}
                id={idx + 1}
                onClick={() => handleTab(idx + 1)}
                className={`tab`}
              >
                {tab}
                <span className="countTotal">1</span>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Tabs;
