import React, { Component }  from 'react';

class SearchBar extends Component {
    state = {
        input: '',
    }

    handleSearch = async (event) => {
        await this.setState({
            input: event.target.value,
        })
        this.props.filterFood(this.state.input)    
    }

    render() {
        return (
            <>
                <input type='text' placeholder='Search...' value={this.state.input} onChange={this.handleSearch}/>
            </>
        )
    }
}

export default SearchBar;