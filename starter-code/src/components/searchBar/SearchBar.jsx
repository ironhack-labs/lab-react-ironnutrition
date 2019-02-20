import React, { Component } from 'react';

export default class SearchBar extends Component {

    state={
        searchName:""
    }

    handleSeachState = (e)=>{
        e.preventDefault()
        this.setState({
            ...this.state,
            searchName:e.target.value
        }, () =>
        this.props.searchFood(this.state.searchName)
        )
    }

    render(){
        return (
            <div>
                <input type="text" className="input search-bar" name="search" placeholder="Search" value={this.state.searchName} onChange={this.handleSeachState}/>
            </div>
        )
    } 

}