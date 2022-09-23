import { Button, Input } from 'antd';
import { useState, useEffect } from 'react';

function Search (props){
    const [searchFood, setSearchFood ] = useState("")
    const { filterFoodList } = props;
    
    useEffect(()=>{
        filterFoodList(searchFood)
    }, [searchFood])
   
    const handleSearchInput = e => {
        setSearchFood(e.target.value);} 
    return (
    <div> 
    <label>Search:</label>
    <Input type="text"  value={searchFood} onChange={handleSearchInput} />
    </div>
    )
}



export default Search;
