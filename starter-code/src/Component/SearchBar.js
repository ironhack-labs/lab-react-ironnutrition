import React from 'react';

const SearchBar = ({search})=>(

  <div className="field has-addons">
    <div className="control">
      <input
        className="input"
        type="text"
        name="search"
        onChange={search}
        placeholder="Find food"/>
    </div>
    <div className="control">
      <a className="button is-info">
        Search
      </a>
    </div>
  </div>

)
export default SearchBar 