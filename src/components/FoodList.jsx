import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBox from './FoodBox';
import FoodForm from './AddFoodForm';

const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson);
    const [search, setSearch] = useState('');
    const [filteredFoods, setFilteredFoods] = useState([]);

    // Delete

    const onDeleteFood = (id) => {
        const newFoods = foods.filter(food => id !== food.id)

        setFoods(newFoods)
    }

    // Create

    const onCreateFood = (food) => {
        setFoods([
            food,
            ...foods
        ])
    }

    // Search
    const onChangeSearch = (event) => {
        const searchTerm = event.target.value;
        setSearch(searchTerm);

        const filtered = foods.filter((food) =>
            food.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

        setFilteredFoods(filtered)
    }


    return (
        <div className="App">
            <h1>LAB | React IronNutrition</h1>
            <div className="form">
                <FoodForm onCreateFood={onCreateFood} />
            </div>
            <hr />
            <div className="mb-3">
                <label htmlFor="search" className="form-label">Search</label>
                <input
                    className="form-control"
                    id="search"
                    name="search"
                    placeholder="Type a text to start filtering"
                    value={search}
                    onChange={onChangeSearch}
                    autoComplete="off"
                />
            </div>
            {search === '' ? (
                foods.length === 0 ? <p>Oops! There is no more content to show.</p> : (
                    foods.map((food) => (
                        <FoodBox key={food.id} food={food} onDeleteFood={() => { onDeleteFood(food.id) }} />
                    ))
                ) 
            ) : (filteredFoods.map((food) => (
                    <FoodBox key={food.id} food={food} onDeleteFood={() => { onDeleteFood(food.id) }} />
                ))
            )}
        </div>
    )
}

export default FoodList;