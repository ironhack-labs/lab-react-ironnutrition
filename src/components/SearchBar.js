import React from 'react';

const SearchBar = ( props ) => {
   const { onChangeSearch, onBlurSearch } = props;
  // when someone typed on input:
  // 1 -> onChange is triggered
  // 2 -> onChange triggers => onChangeSearch
  // 3 -> onChangeSearch passed the 'string' from child to parent => App.js is triggered --> handleSearchBar

    return (
      <div>
        <input 
          type="text" 
          className="input search-bar" 
          name="search" 
          placeholder="Search food"
          onChange={onChangeSearch}
          onBlur={onBlurSearch}
          />
      </div>
  )
}

export default SearchBar;
