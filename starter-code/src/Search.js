import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

    handleOnChange() {
        this.props.onChange()
    }

    
    render(){
        return(
            <div>
                <input onChange={this.handleOnChange} type="text" className="input search-bar" name="search" placeholder="Search" />
            </div>
        )
    }
}

export default Search;