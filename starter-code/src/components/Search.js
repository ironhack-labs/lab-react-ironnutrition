import React, { Component } from 'react';

class Search extends Component {

    constructor(props) {
        super(props);

        this.state = {
            search: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        
        let {name, value} = e.target;

        this.setState({
            [name]: value,
        });

        this.props.searchForm(value);
    }

    render() { 

        return(
            <div>
            <label>SEARCH FOOD: </label>
            <input 
                type='text' 
                name='search' 
                value={this.state.search} 
                onChange={this.handleChange}
            />
            <br />
            </div>
        );
    }
}

export default Search;