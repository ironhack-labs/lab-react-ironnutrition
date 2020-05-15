import React from 'react';
import './Search.css';
import 'bulma/css/bulma.css';

function Search({name,type,placeholder,onChange}) {
  return (
    <input class="input is-info" name={name} type={type?type:"text"} placeholder={placeholder} onChange={onChange} />
    );
}

export default Search;
