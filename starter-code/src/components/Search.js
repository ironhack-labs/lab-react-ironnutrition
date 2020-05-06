import React from 'react'

function Search({ fcn }) {
  return <input type="text" className="search" onChange={fcn}></input>
}

export default Search
