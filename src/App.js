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
  const [show, setShow] = useState(false);

  const addFood = (newFood) => {
    setFoods((prevFoods) => [newFood, ...prevFoods]);
  };

  const onSearch = (wordSearch) => setWord(wordSearch);

  const onDelete = (foodName) => {
    const filteredFoods = foods.filter((food) => {
      return food.name !== foodName;
    });
    setFoods(filteredFoods);
  };

  return (
    <div className="App">
      {/* Display Add Food component here */}
      <Row justify={'center'}>
        <Col span={6}>
          {show && <AddFoodForm addFood={addFood} />}

          <Button onClick={() => setShow(!show)}>
            {' '}
            {show ? 'Hide Form' : 'Add New Food'}
          </Button>

          {/* Display Search component here */}
          <Search onSearch={onSearch} />
        </Col>
      </Row>

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {foods
          .filter((foodSearch) =>
            foodSearch.name.toLowerCase().includes(word.toLowerCase())
          ).length
          ?
          foods
          .filter((foodSearch) =>
            foodSearch.name.toLowerCase().includes(word.toLowerCase())
          )
          .map((food, i) => (
            <FoodBox key={i} {...food} onDelete={onDelete} />
          ))
          :
          <>
          <Row>
            <Col>
            <h3>Oops! There is no more content to show</h3>
          <br/>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Z3vvwvIPf4ZPpmWY2b1VapkfuyQgWmmuwe4cmU32YJKREMeM' />
          
            </Col>
          </Row>
          </>
        }
      </Row>
    </div>
  );
}

export default App;
