import React, { Component } from 'react'

export default class Search extends Component {
    state= {
        searchValue: "",
    }

    handleOnchange = (e) => {
        this.setState({
            searchValue: e.target.value
        })
        this.props.handleSearch(e.target.value)
    }
   
    render() {
        return (
            <div>
               <input className="search-bar" placeholder="Search food" type="text" value={this.state.searchValue} onChange={e=> this.handleOnchange(e)}/> 
            </div>
        )
    }
}
