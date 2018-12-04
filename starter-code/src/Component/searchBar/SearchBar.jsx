import React, { Component } from "react";
import foods from '../../foods'
import './SearchBar.css'

class SearchBar extends Component{
    constructor(){
        super()
    }

    render(){
        return(
        <input type="text" placeholder="name" onChange={e=>this.props.handleUpdateInfo(e.target.value)}/>
        )
    }
}

export default SearchBar