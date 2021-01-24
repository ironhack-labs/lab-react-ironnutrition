import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }
    }

    handleChange = (e) => {

        const value = e.target.value;

        this.setState({
            search: e.target.value
        })
        this.props.filterFood(value);
    }

    render() {
        return (
            <div>
                <input type='text' name='search' value={this.state.search} onChange={this.handleChange} placeholder='Search for food'/>  
            </div>
        )
    }
}

export {SearchBar};