import React from 'react'

class SearchBar extends React.Component {
    state = {
        searchName: ''
    }
    handleSearch = (event) => {
        event.preventDefault();
        const searchInput = event.target.value;
        this.setState({ searchName: searchInput });

    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filteredFoodSearch(this.state.searchName);

    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search..." name="searchName" value={this.state.searchName} onChange={this.handleSearch} />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;