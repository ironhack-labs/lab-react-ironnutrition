import './App.css';
import foodsDataJSON from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFoodForm';
import { useState } from "react";
import { Row } from 'antd';
import SearchBar from './components/Search';

function App() {
  const [foodData, setFoodData] = useState(foodsDataJSON);
  const [foods, setFood] = useState(foodsDataJSON);
  const [query, setQuery] = useState('');

  const addNewFood = (newFood) => {
    const updatedFoodData = [...foodData, newFood];
    const updatedFood = [...foods, newFood];

    setFoodData(updatedFoodData);
    setFood(updatedFood);
  };

  const filteredFood = foods.filter((food) => {
    return food.name.toLowerCase().includes(query.toLowerCase());
  });

  function handleDelete(name) {
    const filteredFood = foods.filter((e) => {
      return e.name !== name;
    });

    setFood(filteredFood);
  }

  return(
    <div className="App">
      
    <AddFood addFood={addNewFood} />
    <SearchBar setQueryProp={setQuery} />
    <Row style={{ width: '100%', justifyContent: 'center' }}>
{filteredFood.map((food) => {
        return (
          
          <div>
            <FoodBox className='FoodBox' key={food.name} food={food} handleDelete={handleDelete}/>
    </div>

        );
      })}
  </Row>
</div>)}
export default App;