import React, { Component } from 'react';
import './Tabs.scss';

class Tabs extends Component {
  render() {
    const { handleTab, tabsData } = this.props;

    return (
      <ul className="tabs">
        {tabsData &&
          tabsData.map(tab => {
            return (
              <li
                key={tab.id}
                onClick={() => handleTab(tab.id)}
                className="tab"
              >
                {tab.name}
                <span className="countTotal">{tab.count}</span>
              </li>
            );
          })}
      </ul>
    );
  }
}

export default Tabs;
