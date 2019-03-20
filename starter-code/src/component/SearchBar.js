import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    name: ''
  }

  handleInput = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return (
      <div>
       
          <input type="text" name="name" onChange={(event)=>{
             this.props.searchBar(event, this.state.name)
            this.handleInput(event)
          }}/>

      </div>
    );
  }
}

export default SearchBar;