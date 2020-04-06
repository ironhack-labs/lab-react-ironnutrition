import React, {Component} from 'react';

class Search extends Component {
    render() {
        debugger
        return (
            <div className="search">
                <input type="search" onChange={this.props.filterFoods} id="searchbar" placeholder="Search"></input>
            </div>
        )
    }
}

export default Search;
