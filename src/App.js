import './App.css';
import foodsFromJson from './foods.json';
import { useState } from "react";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import SearchBar from './components/SearchBar';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(foodsFromJson)
  const [filterText, setFilterText] = useState('');

  const addNewFoodItem = (newFoodItem) => {
    setFoods(oldFoods => [...oldFoods, newFoodItem]);
  }

  return <div className="App">
    <AddFoodForm addNewFoodItem={addNewFoodItem} />
    <Button> Hide Form / Add New Food </Button>
    <Divider>Food List</Divider>
    <SearchBar
      filterText={filterText}
      onFilterTextChange={setFilterText}
    />
    <Row style={{ width: '100%', justifyContent: 'center' }}>
      {foods.map((food) => (
        <FoodBox food={food} key={food.id} />
      ))}
    </Row>
  </div>;
}
export default App;
