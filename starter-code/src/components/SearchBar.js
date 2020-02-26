import React, { Component } from 'react'

export default class SearchBar extends Component {
    state = {
        foodValue: ""
    }

    
    handleChange = e =>{
        let {value, name} = e.target;
        this.setState({[name]: value});
        this.props.searchFood(value);
    }

    render() {
        return (
            <div>
                <input name="foodValue" value={this.state.foodValue} onChange={this.handleChange}/>
            </div>
        )
    }
}