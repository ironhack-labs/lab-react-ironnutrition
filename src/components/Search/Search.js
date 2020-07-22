import React from 'react'
import "./Search.css"



function Search(props) {
   
   
        
    return (
        <div className="searchBar">   
           
            <div class="field has-addons">              
                 <input  class="input" type="text" placeholder="Search food" value={props.searchParam}
                 onChange={props.handleSearchParam}/>
                 
            </div>
        </div>
    )
}

export default Search
