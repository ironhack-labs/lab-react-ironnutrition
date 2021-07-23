import React, { Component } from 'react';

export default class Search extends Component {

    state = {
        input: ''
    }

    handleSearch = async (event) => {
        await this.setState({
            input: event.target.value
        })

        this.props.filterFood(this.state.input)
    }

    render() {
        return(
            <div>
                <input
                type='text'
                placeholder='Search...'
                value={this.state.input}
                onChange={this.handleSearch}
                />
            </div>
        )
    }
}