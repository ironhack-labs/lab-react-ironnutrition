// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 5
function Search(props) {

    const [foodName, setFoodName] = useState('')


    function handleKeyWordInput(event) {
        setFoodName(event.target.value)
        props.handleFilterFood(event.target.value)
    }


    return (
        <>
            <Divider>Search</Divider>

            <label>Search</label>
            <Input value={foodName} type="text" onChange={handleKeyWordInput} />
        </>
    );
}

export default Search;