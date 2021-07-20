import React, {useState} from 'react';
import foodData from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './NewFood';
import SearchBar from './SearchBar';

function FoodList(){
    const [foods, setFoods] = useState(foodData);

    function AddFood(newFood){
        const updateFoodsArray = [newFood, ...foods];
        setFoods(updateFoodsArray);
    }

    function searchFoods(searchTerm){
        let filteredFoods = foods.filter(foodItem => {
            return foodItem.name.includes(searchTerm);
        })
        setFoods(filteredFoods);
    }

    return (
        <div className='div'>
            <SearchBar searchHandler={searchFoods}/>
            <AddFood addfoodHanlder={AddFood}/>
            <ul>
                <li> {foods.map((food, index) => {
                    return(
                        <FoodBox key={index} food={food}/>
                    )
                }
            )}</li>
         </ul>
        </div>
    )
}

export default SearchBar;

