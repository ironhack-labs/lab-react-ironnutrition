import React, { Component } from 'react';
import "./Search.css"

export default class Search extends Component {
        state = {
                searchValue: ''
        }
        handleChange = (event) => {
                this.props.handleSearch(event.target.value);
                this.setState({
                        searchValue:event.target.value
                })
        }
        render() {
                return (
                        <div className="field search-form">
                                <div className="control ">
                                        <input className="input is-primary is-rounded" type="text"
                                                placeholder="Search food"
                                                name="search"
                                                value={this.state.searchValue}
                                                onChange={this.handleChange}

                                        />
                                </div>
                        </div>
                )
        }
}
