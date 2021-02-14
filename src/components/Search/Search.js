import React from 'react';


function Search(props) {


  return (
    <div>
      <input
        type="text"
        placeholder="Search.."
        onChange={props.onChange}
        value ={props.searchFood}
      />
    
     
    </div>
  );
}

export default Search;
