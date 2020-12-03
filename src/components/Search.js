import React from 'react'

const Search = (props) =>{
  return(
    <div>
      <input placeholder="Filter food" type="text" onChange={(event)=>props.changeSearchedWord(event.target.value)}/>
    </div>
  )
}

export default Search