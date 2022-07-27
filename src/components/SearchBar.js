import { Input } from 'antd';
import { useState } from 'react';

function SearchBar(props) {

    const [search, setSearch] = useState("");

    const handleSearch = (e) =>{
        e.preventDefault();

        props.setFood( (prevFoodArr) => {
            const copy = [...prevFoodArr];
            const filteredArr = copy.filter(element => { return element.name.toUpperCase().includes(e.target.value.toUpperCase()) })
            return filteredArr
          });

    }

    return (
        <div>
            <form onChange={handleSearch}>
                <label>Search</label>
                <Input value={search} type="text" onChange={(e) => {setSearch(e.target.value)}} />
            </form>
        </div>
    )
}

export default SearchBar