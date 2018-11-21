import React     from 'react';
import FormField from './FormField';

const SearchBar = ({onChange}) => (
  <FormField
    className="input search-bar"
    type="text"
    name="search"
    holder="Search food..." 
    onChange={onChange}
    autofocus
  />
);

export default SearchBar;