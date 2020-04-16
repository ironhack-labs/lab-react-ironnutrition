// components/Search.js

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Search extends Component {
  state = {
    search: '',
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { search } = this.state;
    return (
      <div className='content'>
        <p className='control has-icons-left'>
          <input
            className='input'
            type='text'
            name='search'
            placeholder='Cheeseburger'
            value={search}
            onChange={this.handleInput}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-camera"></i>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </p>
      </div>
    );
  }
}

export default Search;
