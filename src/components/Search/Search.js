import React from 'react';
import FoodBox from '../FoodBox/FoodBox';


function Search() {
const[searchFood, setSearchFood] = React.useState("")

    return(
        <div>
            <input type="text" placeholder = "Search.." onChange={(e) =>{
                setSearchFood(e.target.value)
            }}/>

            <FoodBox/>
        </div>
    )
}

export default Search;