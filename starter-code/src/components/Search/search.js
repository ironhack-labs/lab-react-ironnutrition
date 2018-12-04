import React, { Component } from "react";
export default class Search extends Component {

  constructor() {
    super();
    this.state = {};
  }

 
  render() {
    return (
        <input className="input" onChange={e=>this.props.searchFood(e)}  type="text" placeholder="Text input"/>
    );
  }
}
  