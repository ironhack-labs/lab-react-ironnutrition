import React, { Component } from 'react';

class Search extends Component {
  constructor(props){
    super(props)
  
    this.state = {
      searchWord: '',
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    console.log(this.state.searchWord)
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    })
  }

  render(){
    return(
      <div className="field has-addons">
        <div className="control">
          <input onChange={this.handleChange} name='searchWord' value={this.state.searchWord} className="input" type="text" placeholder="Find your food!"/>
        </div>
      </div>
    )
  }
}

export default Search;