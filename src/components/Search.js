import {useState} from "react"
// import { Divider, Input } from 'antd';
import { v4 as uuidv4 } from "uuid"


function Search(props) {
 
  const handleSearchInput = (event) => {
    props.setQuery(event.target.value);
  };

  return (
    
      <div>
        <input
          type="text"
          placeholder="Search food"
          value={props.query}
          onChange={(event)=>handleSearchInput(event)}
        />
      </div>
    );
  }
    
export default Search;

