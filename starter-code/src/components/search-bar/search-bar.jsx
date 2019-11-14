  
import React from 'react';

class SearchBar extends React.Component {

  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   foodNameSearched: "",
  //   // }
  // }

  // testF = (x) => {
  // 
  //   console.log(x)
  // }

  // update the state for any attribute that is called
  updateInput = (e) => {
    // console.log(e.target.value) // this works

    this.props.searchFoodList(e, e.target.value)
  }

  render() {
    return(
      // <form onSubmit={(e) => {this.props.testFf(e, this.state.foodNameSearched,)}}>
        <div className="field is-grouped">
        <p className="control is-expanded">
          <input className="input" type="text"  onChange={this.updateInput} placeholder="Find a food" />
          {/* <input className="input" type="text"  onChange={this.updateInput} placeholder="Find a food" /> */}
        </p>
        <p className="control">
          <button className="button is-info">
            Search
          </button>
        </p>
      </div>
    // </form>
    )
  }
}

export default SearchBar;