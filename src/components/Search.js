import React, { Component } from 'react';


class Search extends Component {
    render() {
        const {onSearch} = this.props
        return (
            <div>
                <input onChange = {this.props.onSearch} class="input" type="text" noValidate autoComplete="off" name="search" placeholder="Search here..." />
            </div>
        )
    }
}
export default Search;