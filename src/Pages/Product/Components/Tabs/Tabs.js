import React, { Component } from 'react';
import './Tabs.scss';

class Tabs extends Component {
  render() {
    const { tabsData, currentId, handleTab } = this.props;

    return (
      <ul className="tabs">
        {tabsData.map((tab, idx) => {
          return (
            <li
              key={idx}
              id={idx + 1}
              onClick={() => handleTab(idx + 1)}
              className={`tab ` + (currentId === idx + 1 && 'on')}
            >
              {tab}
              <span className="countTotal">22</span>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Tabs;
