

import './App.css';
import { Card } from 'antd';
import { useState } from 'react'; // import useState hook
import foods from '../foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './search';

function App () {

  const [foodList, setFoodList] = useState(foods)

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e) =>{
    setSearchTerm(e)
  }

  const filteredFoods = foodList.filter((food) =>
  food.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const removeFood = (foodName) =>{
    setFoodList(foodList.filter((food) => food.name!== foodName))
  }

  const addNewFood = ({
    inputName,
    inputImage,
    inputCalories,
    inputServings,
  }) => {
    const newFood = {
      name: inputName,
      image: inputImage,
      calories: inputCalories,
      servings: inputServings,
    }

    setFoodList([...foodList, newFood])
}
  return (
    <>
    <h2> Create Food </h2>
    <AddFoodForm createNewElement={addNewFood}/>
    <h2> Search Food </h2>
    <Search  handleSearch={handleSearch}/>
    <h2> Food List </h2>
    {filteredFoods.map((food, i) => {
      return (
        <Card key={i} title={food.name} size="small" bordered>
          <FoodBox {...food} onDelete={() => removeFood(food.name)} />
        </Card>
      )
    })}
    </>

    )
}

