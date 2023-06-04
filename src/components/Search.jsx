
import { useState } from 'react';

function Search (props) {

    const { showFilteredFoods } = props;
    const [searchName, setSearchName] = useState();

    const handleSearch = (event) => {
        showFilteredFoods(event.target.value)
        setSearchName(event.target.value)
    }

    return (

        <div className="SearchInput">
            <input type="text" value={searchName} onChange={handleSearch}/>
        </div>

    )

}

export default Search;

