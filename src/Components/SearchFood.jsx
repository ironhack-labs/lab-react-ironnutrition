import React, { Component } from 'react'

 class SearchFood extends Component {
     foodChange = (event) =>{
this.props.callbackFoodChange(event.target.value)
     }
    render() {
        return (
            <div>
                <input type="text"
                placeholder="Search"
                value={this.props.value}
                onChange={this.foodChange} />
            </div>
        )
    }
}
export default SearchFood