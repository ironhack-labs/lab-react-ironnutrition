import React, { Component } from 'react'

 class Search extends Component {
     
     handleChange = (evt) => {
        this.props.search(evt.target.value);
     }
    render() {
        return (
            <div>
                <input onChange={this.handleChange} name = "input" style={{
                    width: "80%"
                }} type="text"/>
            </div>
        )
    }
}

export default Search

