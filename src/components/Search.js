import { useState } from 'react';
import { Input, Divider } from 'antd';

const Search = (props) => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInput = (event) => {

        const foodsCopy = [...props.foods];

        const newQuery = event.target.value.toLowerCase();
        setSearchQuery(newQuery);
        const filteredFoods = foodsCopy.filter((food) =>
            food.name.toLowerCase().includes(newQuery)
        );
        props.setFoods(filteredFoods);
    };

    return (
        <>
            <Divider>Search</Divider>

            <Input value={searchQuery} type="text" onChange={(event) => handleSearchInput(event)} placeholder='Search for a food...' style={{ width:'10%'}} />
        </>
    )
};

export default Search;