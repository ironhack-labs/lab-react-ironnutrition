import { useState } from "react";
import foodsJson from "../foods.json";
import FoodBox from "./FoodBox";
import AddFoodForm from "./AddFoodForm";
import SearchBar from "./SearchBar";

function FoodList(props) {
    const [foods, setFoods] = useState(foodsJson);
    const [filteredFoods, setFilteredFoods] = useState(foodsJson);

    function deleteFood(id) {
        let tempFoods = [...foods].filter((food) => food.id != id);
        setFoods(tempFoods);
        setFilteredFoods(tempFoods);
    };

    function addFood(food) {
        setFoods([...foods, food])
        setFilteredFoods([...filteredFoods, food]);
    };

    return (
        <div>
            <AddFoodForm addFoodFunction={addFood} />
            <SearchBar foods={foods} setFoodsFunction={setFilteredFoods} />
            {filteredFoods.length == 0
                ? <div>
                    <p>⛔</p>
                    <p><b>Oops! There is no more content to show.</b></p>
                    <p>⛔</p>
                </div>
                : filteredFoods.map(food => {
                    return (
                        <div key={food.id}>
                            <FoodBox food={food} deleteFunction={deleteFood} />
                        </div>
                    )
                })
            }
        </div>
    );
}

export default FoodList;