import React from "react";

const Search = (props) => {
    return (
      <div>
        <input 
          type="text" 
          className="input search-bar" 
          name="search" 
          placeholder="Search" 
          defaultValue=""
          onChange={props.handleChange}
          onKeyDown={props.handleDelete}
        />
      </div>
    );
};

export default Search;