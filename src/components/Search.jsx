import { Input } from "antd";
import { useState } from "react";

export default function Search(props){

    const [searchBarData, setSearchBarData] = useState("")
    
    function handleSearch(event){
        const value = event.target.value;
        setSearchBarData(value)

        props.filterFoods(value);
    }

    return(
        <Input value={searchBarData} type="text" name="search-bar" onChange={handleSearch} />
    )
}