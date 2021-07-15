import React, { Component } from 'react'

class Searchbar extends Component {
    render() {
        return (
            <div class="field">
            <div class="control">
                <input onChange={this.props.onSearch} class="input" type="text" placeholder="Search here" name="search"/>
            </div>
        </div>
        )
    }
}
export default Searchbar;