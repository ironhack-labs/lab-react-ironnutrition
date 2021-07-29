import React, {useState} from 'react'

function SearchBar(props){
    const [keyword, setKeyword] = useState('')
    return(
        <div>
            <input type="text" value={keyword} placeholder={"Search"} onChange={(event)=> setKeyword(event.target.value)}/>
            <button onClick={()=> props.searchHandler(keyword)}>Search</button>

        </div>



    )
}


export default SearchBar;