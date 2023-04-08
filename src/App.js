import './App.css';
import { useState } from 'react';
import food from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import { Row, Divider, Button } from 'antd';

function App() {
  const [foods, setFoods] = useState(food);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFood = foods.filter((element) => {
    if (searchQuery === "") {
      return true;
    }

    return element.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="App">
      <AddFoodForm foods={foods} setFoods={setFoods} />

      <Button> Hide Form / Add New Food </Button>

      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {filteredFood.map((food) => {
          return <FoodBox food={food} foods={foods} setFoods={setFoods}/>;
        })}
      </Row>
    </div>
  );
}

export default App;
