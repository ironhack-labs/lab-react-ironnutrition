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

  return <div className="App">
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <div>{searchTerm}</div>
    {/* add new food */}
    <AddFoodForm addFood={addNewFood}/>
    {/* map and list all cards */}
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {food.filter(el => {
        return searchTerm === "" ? true : el.name.includes(searchTerm)})
        .map((anyFood) => (
        <div key={anyFood.id}>
          <FoodBox food={anyFood} />
        </div>
      ))}
    </Row>

  </div>;
}
export default App;
