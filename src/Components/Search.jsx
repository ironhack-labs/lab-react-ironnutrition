import { useState } from 'react';
import { Input } from 'antd';

function Search(props) {

    const [searchValue, setSearchValue] = useState("");

const filteredFoodArr = (e) => {
    setSearchValue(e.target.value)
} 
return (
    <label>
        Search:
        <Input type="text" value={searchValue} onChange={filteredFoodArr}/>
    </label>
)
}

export default Search;