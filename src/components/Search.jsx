import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search(props) {
    const { changeResult, allFoods } = props
    const [query, setQuery] = useState("")

    const handleQueryChange = e =>{
        setQuery(e.target.value)
        const searchResult = allFoods.filter((food) =>
             food.name.toUpperCase().includes(e.target.value.toUpperCase()) )
             
        changeResult(searchResult)
    }

    return (
        <>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input value={query} type="text" onChange={handleQueryChange} />
        </>
    );
}

export default Search;