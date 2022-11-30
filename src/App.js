import './App.css';
import { useState } from "react";
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Row, Divider, Button} from 'antd';
import Search from './components/Search'

function App() {

  const [food, setFood] = useState(foods);
  const [searchTerm, setSearchTerm] = useState("");

  function addNewFood(newFood){
    const updatedFood = [...food, newFood];
    setFood(updatedFood);
  }

  function removeFood(name){
    console.log(name)
    const deletedFood = food.filter(food => food.name !== name);
    setFood(deletedFood);
  }

  return <div className="App">

    {/* search for food */}
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

    {/* add new food */}
    <AddFoodForm addFood={addNewFood}/>

    {/* map and list all cards depending on search as well */}
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {food.filter(el => {
        return searchTerm === "" ? true : el.name.includes(searchTerm)})
        .map((anyFood) => (
        <div key={anyFood.name}>
          <FoodBox food={anyFood} deleteFood={removeFood}/>
        </div>
      ))}
    </Row>

  </div>;
}
export default App;
