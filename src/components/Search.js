import React, { Component } from 'react'

 class Search extends Component {

    handleSearch = event => {
        this.props.searchTheFood(event.target.value);
    }
    render() {
        return (
            <div>
                    <label htmlFor="">Search:</label>
                    <input type="text" name="name" onChange={(e) => this.handleSearch(e)}/>
            </div>
        )
    }
}

export default Search