import React, { Component } from "react";

export default class Search extends Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     search: undefined
  //   }
  // }
  // searchFood(e) {
  //   let newState = {
  //     ...this.state,
  //     search: e.target.value
  //   }
  //   this.setState(newState);
  //   console.log(this.state)
  //   this.sendState(e)

  // }
  // sendState(e) {
  //   e.preventDefault();
  //   console.log("2")
  //   this.props.sendStateFromApp(this.state);
  // }
  render() {
    return (
      <div>
        <form>
        <input
          type="text"
          name="search"
          placeholder="search"
          // value={this.state.search}
          onChange={e => this.props.searchFood(e)}
        ></input>
        </form>
      </div>
    );
  }
}
