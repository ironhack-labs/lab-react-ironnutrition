import React from 'react';

function Search(props){

  return  (<div>

  Search: <input onChange={(e) => props.searchHandler(e)}></input>  <br />

  </div>)
   

}

export default Search