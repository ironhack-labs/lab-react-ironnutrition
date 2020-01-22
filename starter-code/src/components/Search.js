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
    const { name, value } = event.target;
    // console.log(value)
    this.setState({
      [name]: value,
    })
    this.props.search(value)
    this.props.toggleFilter(value)
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