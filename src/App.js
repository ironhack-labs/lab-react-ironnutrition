// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import { Row, Divider, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [foodArr, setFoodArr] = useState(foods);
  const [showForm, setShowForm] = useState(false);

  // Comp form

  let boolE = false;

  const deleteFood = (name) => {
    let newArr = foodArr.filter((elem) => elem.name !== name.name);
    setFoodArr(newArr);
  };

  const setForm = (showForm) => {
    setShowForm(!showForm);
  };

  return (
    <div className="App">
      <Button onClick={() => setForm(showForm)}>
        {' '}
        Hide Form / Add New Food{' '}
      </Button>
      {showForm && <AddFoodForm foodArr={foodArr} setFoodArr={setFoodArr} />}
      {foodArr.length === 0 && 'No food anymore'}

      <Search foodArr={foodArr} setFoodArr={setFoodArr} />

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodArr.map(({ name, calories, image, servings }) => (
          <FoodBox
            key={uuidv4()}
            name={name}
            calories={calories}
            image={image}
            servings={servings}
            deleteFood={deleteFood}
          />
        ))}
      </Row>
    </div>
  );
}

export default App;
