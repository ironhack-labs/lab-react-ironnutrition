import React from 'react';

class SearchBox extends React.Component{

        constructor(props){
            super(props);
            this.state = {
                searchBar: "",
            }
        }

    updateSearch = (e) =>{
        let searchUpdate = this.state.searchBar;
        searchUpdate = e.target.value;
        this.setState({
          searchBar: searchUpdate,
        }, () => {
            this.props.filterFunction(this.state.searchBar)
        })
      }




    render(){
        return(
            <input type="text" value={this.state.searchBar} name="searchBar" onChange = {this.updateSearch} placeholder="Search for a food"/>
        )
    }
}

export default SearchBox;