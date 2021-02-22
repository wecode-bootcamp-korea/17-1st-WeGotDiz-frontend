import React, { Component } from 'react';
import './Tabs.scss';

class Tabs extends Component {
  render() {
    const { handleTab } = this.props;
    const { tabData } = this.props;

    return (
      <ul className="tabs">
        {tabData &&
          tabData.map((tab, idx) => {
            return (
              <li
                key={idx}
                id={idx + 1}
                onClick={() => handleTab(idx + 1)}
                className="tab"
              >
                {tab}
                <span className="countTotal">2</span>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Tabs;
