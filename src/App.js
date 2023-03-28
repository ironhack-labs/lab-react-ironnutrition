import { useState } from "react";
import foods from "./foods.json";
import { Row, Divider } from 'antd';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [search, setSearch] = useState('');

  const addFood = (newFood) => {
    setFoodList(prev => [newFood, ...prev])
  };

  const onSearch = (value) => {
    setSearch(value);
  }

  const filteredFood = foodList.filter(elem => elem.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="App">
      <Divider>Add Food Entry</Divider>
      <AddFoodForm addFood={addFood} />

      <Divider>Search</Divider>
      <Search search={search} onSearch={onSearch} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFood.map((food) => <FoodBox key={food.name} food={food} />)}
      </Row>
    </div>
  );
}

export default App;
