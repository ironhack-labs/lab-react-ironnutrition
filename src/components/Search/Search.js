import React from 'react';
import './Search.css'


class Search extends React.Component {

  render() {
    return (
      <div className='search-input'>
        <input placeholder='Search' className='input is-info' type="text" name="search" onChange={event => this.props.search(event.target.value)} />
      </div>

      )
  }

}

export default Search;