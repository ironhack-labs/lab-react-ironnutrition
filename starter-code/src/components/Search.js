import React, {Component} from 'react';

class Search extends Component{
  constructor(props){
    super(props);
    this.state ={
      searchString: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchString: e.target.value
    });
    this.props.setFilteredFoods(
      this.props.foods.filter(food => {
        return food.name.toUpperCase().includes(e.target.value.toUpperCase());
      })
    );
  }

  render(){
    return (
      <div>
        <label for="search">Search Foods: </label>
        <input type="text" value={this.searchString} onChange={this.handleChange} id="search"></input>
      </div>
    );
    
  }


  
}

export default Search;