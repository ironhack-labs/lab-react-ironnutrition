import React from 'react';
class SearchBar extends React.Component {
    state = {
        search: ""
    }
    handleSearch = (event) => {
        const { value } = event.target;
        this.props.findFood(value);
        this.setState({ search: value });
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    className="input search-bar"
                    name="search"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.handleSearch}
                />
            </div>
        )
    }
}
export default SearchBar;