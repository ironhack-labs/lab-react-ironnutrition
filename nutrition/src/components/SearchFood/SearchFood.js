import React, { Component } from 'react'


class SearchFood extends Component {

    render() {
        const {handleOnChange} = this.props

        return(

            <input type="text" className="input search-bar searchbar-size" name="search" placeholder="Search" onChange={handleOnChange} />
        )
    }

}

export default SearchFood