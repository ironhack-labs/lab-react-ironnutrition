import React, { Component } from 'react';
import './styles/Search.css';

export default class Search extends Component {
  render() {
    const { onSearch } = this.props;
    return (
      <div className="search__container">
        <div className="box">
          <div className="field">
            <label className="label">Search</label>
            <div className="control">
              <input
                className="input"
                type="text"
                onChange={onSearch}
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
