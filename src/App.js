import './App.css';
import { useState } from 'react';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFoodForm from './AddFoodForm';
import Search from './Search';
import { Row, Divider, Button } from 'antd';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [query, setQuery] = useState("")

  const filteredFood = foodList.filter(meal => {
    return meal.name.toLowerCase().includes(query.toLowerCase())
  });

  const deleteContact = (foodName) => {
    setFoodList(meals => {
        return meals.filter(meal => meal.name !== foodName)
    })
  }

  return (
    <div className="App">
      <Button> Hide Form / Add New Food </Button>
      <AddFoodForm foodList={foodList} setFoodList={setFoodList}/>
      
      <Search setQueryProp={setQuery}/>

      <Divider>Food List</Divider>
      
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFood.map(food => (
         <FoodBox food={food} queryProp={query} deleteMealProp={deleteContact}/>
        ))}
      </Row>
    </div>
  );
}

export default App;
