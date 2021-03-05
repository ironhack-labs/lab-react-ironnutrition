import { Component } from 'react';

class Search extends Component {

    render() {
        return(
            <input onChange={this.props.handleSearch} value={this.props.searchValue} className={`input ${this.props.className}`} type="text" placeholder="Search..."></input>
        );
    }
}

export default Search;