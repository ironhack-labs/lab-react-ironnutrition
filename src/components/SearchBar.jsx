import React, { Component } from 'react'

export default class SearchBar extends Component {
    
    handleChange = (e) => {
        this.props.liftValue(e.target.value)
    }
    
    render() {

        return (
            <div>
                <form action="">
                    <input 
                    onChange={this.handleChange}
                    value={this.props.filterText}
                    type="text"/>
                </form>
            </div>
        )
    }
}
