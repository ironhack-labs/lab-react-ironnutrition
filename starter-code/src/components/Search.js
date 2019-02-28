import React, { Component } from 'react';

class Search extends Component {

    constructor(props){
        super(props);
  
        this.state = { 
          searchText:'',
        }
    }
    
    handleChange = (e) => {
        this.props.searchTheText(e.target.value);
      }

      

    render(){
        return (
      
                <form>
                <label>Search:</label>
                <input type="text" name="search" onChange={(e) => this.handleChange(e)} />
                </form>
            
        )
      }
}
export default Search;