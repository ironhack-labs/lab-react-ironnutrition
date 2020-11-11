import React, { Component } from 'react'

 class Search extends Component {

    onChangeHandler = (event) => {
        let value = event.target.value
        // console.log(value)
        this.props.showResult(value)

        
    }

    render() {
        return (
            <div>
                <label htmlFor="search">Search your food here</label>
                <input type="text" name="search" onChange= { (event) => this.onChangeHandler(event) }/>
            </div>
        )
    }
}

export default Search
