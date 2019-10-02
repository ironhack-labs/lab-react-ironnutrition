import React, { Component } from 'react'

export default class Search extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     foodSearch: ""
  //   }
  //   // console.log(this.state)
  // }
  // updateSearchFormData(e, field) {
  //   let newState = {
  //     ...this.state
  //   };

  //   newState[field] =  e.target.value;

  //   this.setState(newState);
  // }

  // sendSearchStateFromApp(e) {
  //   e.preventDefault();
  //   // console.log(this.state)
  //   this.props.sendSearchStateFromApp(this.state);
  // }

  render() {
    return (
      <div>
        <form className="search-form" id="test">
        {/* {this.state.foodSearch && (
          <h1>
            {this.state.foodSearch}
          </h1>
        )} */}

        <input
          type="search"
          name="foodName"
          placeholder="Search foods"
          // value={this.state.foodSearch}
          onChange={e => this.props.updateSearchFormData(e)}
        ></input>
        

        {/* <button onClick={e => this.sendSearchStateFromApp(e)}>Search</button> */}

        
      </form>
      </div>
    )
  }
}
