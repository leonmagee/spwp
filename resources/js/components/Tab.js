import React, { Component } from 'react';

class Tab extends Component {
  constructor() {
    super();
  }
  render() {
      if(this.props.index == this.props.active) {
        var tab = (
        <div className="tabs__item">
          {this.props.children}
        </div>
        )
      } else {
        var tab = <div></div>;
      }

    return(
      <>{tab}</>
    )
  }
}

export default Tab;
