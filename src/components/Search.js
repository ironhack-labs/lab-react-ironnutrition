import React, { Component } from 'react';

class Search extends Component {
    state = {
        searchInput: ''
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({[name]: value});

        this.props.foodSearch(value);
    };

    

    render(){
        return(
            <div className="flex-center">
                <div className="control search-bar">
                    <form>
                        <input className="input" type="text" name="searchInput" placeholder="Search" value={this.state.searchInput} onChange={(e) => this.handleChange(e)} />
                    </form>
                </div>
            </div>
            
        )
    }
}

export default Search;