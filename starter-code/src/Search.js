import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange(e) {
        console.log(e.target.value)
        this.props.onChange(e.target.value)
    }

    
    render(){
        return(
            <div>
                <input onChange={(e) => this.handleOnChange(e)} type="text" className="input search-bar" name="search" placeholder="Search" />
            </div>
        )
    }
}

export default Search;