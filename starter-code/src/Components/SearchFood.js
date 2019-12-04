import React, { Component } from 'react';

class SearchFood extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    handleChange = elem => {
        let { name, value } = elem.target
        this.setState({ [name]: value }, () => this.props.searchFood(this.state.name));
    
    }

    render() {
        return (
            <div>
                <input name="name" type="text" placeholder="search" id='searchInput' value={this.state.name} onChange={this.handleChange}/>
            </div>
        )
    }
}
export default SearchFood;

