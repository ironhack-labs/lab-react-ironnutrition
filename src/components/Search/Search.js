import React, {Component} from 'react';

class Search extends Component{
  constructor(props){
    super(props);
      this.state = {
      search: ""
    }
  }

  render(){
    return (
      <div className="field is-grouped">
  <p className="control is-expanded">
    <input className="input" type="text" 
      placeholder="Find food"
      value={this.state.search}
      onChange={this.props.searchFood}  
      />
  </p>
  <p className="control">
    <button className="button is-info">
      Search
    </button>
  </p>
</div>
    )
  }
}

export default Search;
