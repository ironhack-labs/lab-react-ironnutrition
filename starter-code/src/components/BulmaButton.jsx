import React, { Component } from "react";
import {getClassName} from "../Bulma_Classes";

export default class BulmaButton extends Component {
  render() {
    const {children, onClick} = this.props;
    return <button onClick={onClick} className={getClassName(this.props, "button ")}>{children}</button>;
  }
}
