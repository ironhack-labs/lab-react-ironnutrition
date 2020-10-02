import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
    }

    handleChange = async (event) => {
        await this.setState({
            search: event.target.value
        });        
        this.props.onChange(this.state.search);
    }

    render() {
        return (
            <div>
                <input 
                    onChange={this.handleChange} 
                    type="text" 
                    className="input search-bar" 
                    name="search" 
                    placeholder="Search" 
                    value={this.state.search}/>
            </div>
        )
    }
}