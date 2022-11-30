import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [query, setQuery] = useState("");
  const [isActive, setActive] = useState("false");

  const filteredFood = foodList.filter(meal => {
    return meal.name.toLowerCase().includes(query.toLowerCase())
  });

  const deleteFood = (foodName) => {
    setFoodList(meals => {
        return meals.filter(meal => meal.name !== foodName)
    })
  }

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
      <Button onClick={handleToggle}> Hide Form / Add New Food </Button>
      <div className={isActive ? "app" : "hidden"}>
        <AddFoodForm foodList={foodList} setFoodList={setFoodList}/>
      </div>
      
      <Search setQueryProp={setQuery}/>

      <Divider>Food List</Divider>
      
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFood.map(food => (
         <FoodBox food={food} queryProp={query} deleteMealProp={deleteFood}/>
        ))}
      </Row>
    </div>
  );
}

export default App;
