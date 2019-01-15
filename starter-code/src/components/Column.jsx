
import React, { Component } from "react";

export default class Column extends Component {
  render() {
    const {className, children} = this.props;
    return (
      <div className={"column " + className}>
        {children}
      </div>
    );
  }
}
