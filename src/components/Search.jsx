import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search (props){
    const [searchFood, setSearchFood ] = useState("")

    return (
    <div> 
    <label>Search:</label>
    <Input type="text"  value={searchFood} onChange={handleSearchInput} />
    </div>
    )
}



export default Search;
