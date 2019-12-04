import React, { Component } from 'react'


export default class SearchBar extends Component {  

    handleInput = (e) => {
        this.props.updateBar(e.target.value);
    }
   
    render() {
    return (
        <div>
            <input onChange={this.handleInput} />
        </div>
    )
    }
}
