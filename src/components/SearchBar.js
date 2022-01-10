import React from 'react';

const SearchBar = (props) => {
  const { inputSearchBar } = props;
  // when someone typed on input:
  // 1 -> onChange is triggered
  // 2 -> onChange triggers => inputSearchBar
  // 3 -> inputSearchBar passed the 'string' from child to parent => App.js is triggered --> handleSearchBar

    return (
      <div>
        <input 
          type="text" 
          className="input search-bar" 
          name="search" 
          placeholder="Search food"
          onChange={inputSearchBar}
          />
      </div>
  )
}

export default SearchBar;