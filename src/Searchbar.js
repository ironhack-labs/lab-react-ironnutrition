import React, { Component } from 'react'

export default class Searchbar extends Component {
    
    search = e => {
        this.props.callback(e.target.value)
    }
    
    render() {
        return (
            <form>
                <input className="control input mb-3" type="text" name="search" placeholder="Search..." onChange={this.search}/>
            </form>
        )
    }
}
