import './App.css';
import { Card, Col, Button, Input, Divider } from 'antd';
import foods from './foods.json';
import { useEffect, useState } from 'react';

export function List({ foodsList }) {
  const listItems = foodsList.map((elem) => {
    return (
      <li key={elem.name}>
        <FoodBox food={elem} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}

export function FoodBox({ food }) {
  return (
    <Col>
      <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={food.image} height={60} alt="food" />
        <p>{food.calories}</p>
        <p>{food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

const defaultState = {
  name: '',
  image: '',
  calories: 0,
  servings: 0,
};

export function AddFoodForm({ setFoodsList }) {
  const [state, setState] = useState(defaultState);

  function handleChange(event) {
    setState((old) => {
      let newValue = event.target.value;
      if (typeof old[event.target.name] === 'number') {
        newValue = parseFloat(event.target.value);
      }
      return { ...old, [event.target.name]: newValue };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newFood = { ...state };
    setFoodsList((old) => [...old, newFood]);
    setState(defaultState);
  }

  useEffect(() => console.log(state), [state]);

  return (
    <form onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        name="name"
        value={state.name}
        type="text"
        onChange={handleChange}
      />

      <label>Image</label>
      <Input
        name="image"
        value={state.image}
        type="text"
        onChange={handleChange}
      />

      <label>Calories</label>
      <Input
        name="calories"
        value={state.calories}
        type="number"
        onChange={handleChange}
      />

      <label>Servings</label>
      <Input
        name="servings"
        value={state.servings}
        type="number"
        onChange={handleChange}
      />

      <button type="submit">Create</button>
    </form>
  );
}

function App() {
  const [foodsList, setFoodsList] = useState(foods);
  return (
    <div className="mainDiv">
      <AddFoodForm setFoodsList={setFoodsList} />
      <List foodsList={foodsList} />
    </div>
  );
}

export default App;
