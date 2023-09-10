import './FoodBox.css'
import { v4 as uuidv4 } from 'uuid';
import foodsJson from "../foods.json";
import { useState } from "react";
import FoodBoxList from "./FoodBoxList";
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function FoodBox () {

  //funtion de estados
    const [foods, setFoods] = useState(foodsJson);
    const [search, setSearch] = useState('');

        const onDeleteFoodBox = (id) => {
        const newFoods = foods.filter((food) => food.id !== id);

        setFoods (newFoods)
    }

  // function para guardar el nuevo elemento agregado y que le asigne un valor de ID
    const onCreate = (food) => {
        const foodToCreate = {
          ...food,
          id: uuidv4(),
        };
    
        setFoods([foodToCreate, ...foods]);
      };

      const handleSearch = (event) => {
        setSearch(event.target.value);
      };

  // Filtra las comidas basados en la búsqueda
    const filteredFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        
    <>
     <div className='NavSearch'>
    <AddFoodForm onCreate={onCreate}  />
    <Search onSearch={handleSearch} />
    </div>
    <div className="cardContainer">
        
      {filteredFoods.map((food, id) => (
        <FoodBoxList key={id} food={food} onDeleteFood={() => onDeleteFoodBox (food.id)} />
      ))}
    </div>

    </>

    
        
    )
}

export default FoodBox;