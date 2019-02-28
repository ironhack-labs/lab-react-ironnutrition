import React, { Component } from "react"

class SearchBar extends Component{

    state={
        searchName:""
    }

    handleSearchState = (event)=>{
        event.preventDefault()
        this.setState({
            ...this.state,
            searchName:event.target.value
        }, () =>
        this.props.searchFood(this.state.searchName)
        )
    }

    render(){
        return(
            <div>
                <input type="text" name="search"  placeholder="Search" value={this.state.searchName} onChange={this.handleSearchState}/>
            </div>
        )
    }
}

export default SearchBar