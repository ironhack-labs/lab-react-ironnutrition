import { Divider, Input } from 'antd';
import { useState } from 'react';

function Search(props) {
    const [foodSearch, setFoodSearch] = useState("");
    const handleChange = (e) => {
        setFoodSearch(e.target.value);
        props.callbackSearchFood(e.target.value)
    }
    return (
        <>
        <Divider>Search</Divider>

        <label>Search</label>
        <Input value={foodSearch} type="text" onChange={(e) => {handleChange(e)}} />
        </>
    );
}

export default Search;
