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
  const [formHidden, setFormHidden] = useState(false)

  const filteredFood = foods.filter((element) => {
    if (searchQuery === "") {
      return true;
    }

    return element.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  function toggleForm() {
    setFormHidden(!formHidden)
  }

  return (
    <div className="App">
      {!formHidden && <AddFoodForm foods={foods} setFoods={setFoods} />}

      <Button id="formButton" onClick={toggleForm}>{formHidden ? "Add New Food" : "Hide Form" } </Button>

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
