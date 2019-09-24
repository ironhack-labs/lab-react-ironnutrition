import React, { Component } from 'react';
class SearchBar extends Component {

    render() {
        return (
            <div className="field has-addons"
                style={{
                    padding: "20px",
                    margin: "20px"
                }}
            >
                <div className="control">

                    <input
                        className="input"
                        type="text"
                        name="query"
                        value={this.props.value}
                        onChange={e => this.props.onSearch(e.currentTarget.value)}
                        placeholder="Search For Food" />


                </div>
                <div className="control">
                    <a className="button is-info">
                        Search
    </a>
                </div>
            </div>
        );
    }
}

export default SearchBar;