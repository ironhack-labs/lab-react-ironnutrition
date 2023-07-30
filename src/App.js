import { useState } from 'react';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import { Row, Divider, Button, Col } from 'antd';
import './App.css';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [word, setWord] = useState('');

  const addFood = (newFood) => {
    setFoods((prevFoods) => [newFood, ...prevFoods]);
  };

  const onSearch = (wordSearch) => setWord(wordSearch);

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <Row justify={'center'}>
        <Col span={6}>
          <AddFoodForm addFood={addFood} />

          <Button> Hide Form / Add New Food </Button>

          {/* Display Search component here */}
          <Search onSearch={onSearch} />
        </Col>
      </Row>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods
          .filter((foodSearch) =>
            foodSearch.name.toLowerCase().includes(word.toLowerCase()))
          .map((food, i) => (
            <FoodBox key={i} {...food} />
          ))}
      </Row>
    </div>
  );
}

export default App;
