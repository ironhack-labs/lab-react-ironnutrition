import React, { Component } from 'react';
import "bulma/css/bulma.css";

class Search extends Component {

  constructor(props){
      super(props);
      this.state = { 
        name: ''
      }
      this.handleSearchInput = this.handleSearchInput.bind(this);
  }

handleFormSubmit = (event) => {
  event.preventDefault();
  this.props.searchTheFood(this.state);   
  this.setState({
    name: ''
  })  
}

handleSearchInput = (event) => {
    this.setState({
      name: event.target.value
    }, () => console.log(this.state) )
  }


 render() {
    return (
    <div className="control">
       {/* <form > */}
       <input onSubmit={this.handleFormSubmit} type="text" name="name" value={this.state.name} onChange={(e) => this.handleSearchInput(e)}></input>
       {/* </form> */}
    </div>
  );
 }
};

export default Search;