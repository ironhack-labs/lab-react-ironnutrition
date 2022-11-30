import { useState } from "react"

function Search(props){ 
  const handleSelect = e => {
    props.setQuery(e.target.value);
  }
	return (
		<input value={props.query} type="text" onChange={handleSelect} />
	)

}

export default Search                                                                                                 