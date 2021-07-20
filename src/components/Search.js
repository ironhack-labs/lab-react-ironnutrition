import React, { Component } from 'react'
import {TextField} from '@material-ui/core';

 class Search extends Component {
    render() {

        const { onSearch } = this.props

        return (
            <div>
                <TextField  onChange={ onSearch } id="standard-basic" label="Search a book" name="search"/>
            </div>
        )
    }
}

export default Search