import React from "react";
import InputField from './InputField';


const Search = props => {
  return (
    <div>
      <InputField onChange={props.handleInputChange} type="text" name="searchTerm" placeholder="search for food" />
    </div>
  )
}

export default Search;