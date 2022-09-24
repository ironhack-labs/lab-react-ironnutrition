import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import { Row, Divider, Card, Col, Button, Input } from 'antd';

function App() {
  const [foodList, setFoodList] = useState([...foods]);
  const [filter, setFilter] = useState('');

  console.log('ARRAY: ', foods);
  console.log('filter: ', filter);

  // const [count, setCount] = useState(0)

  // function incremenet() {
  //   setCount(count + 1)
  //   setCount(currentCount => currentCount + 1)
  // }

  // const addFood = (newDish) => {
  //   setFoodList(...foodList, newDish);
  // };

  return (
    <div className="App">
      <AddFoodForm addFoodFunction={setFoodList} />
      <Search filterFoodList={setFilter}></Search>

      <Divider>Food List</Divider>
      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {foodList
          .filter((food) => food.name.toLowerCase().includes(filter))
          .map((food) => {
            return (
              <FoodBox
                key={food.name}
                food={food}
                removeFoodOnDelete={setFoodList}
              />
            );
          })}
      </Row>
    </div>
  );
}

function FoodBox({ food, removeFoodOnDelete }) {
  const { name, calories, image, servings } = food;

  return (
    <Col>
      <Card title={name} style={{ width: 230, height: 300, margin: 10 }}>
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories * servings} </b> kcal
        </p>
        <Button
          type="primary"
          onClick={() => {
            removeFoodOnDelete((arr) =>
              arr.filter((dish) => dish.name !== name)
            );
          }}
        >
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
}

function AddFoodForm({ addFoodFunction }) {
  const [newFood, setNewFood] = useState({
    name: '',
    image: '',
    calories: 0,
    servings: 0,
  });
  console.log('NEW FOOD: ', newFood);

  return (
    <form
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input
        value={newFood.name}
        type="text"
        onChange={(e) => setNewFood({ ...newFood, name: e.target.value })}
      />

      <label>Image</label>
      <Input
        value={newFood.image}
        type="text"
        onChange={(e) => {
          setNewFood({ ...newFood, image: e.target.value });
        }}
      />

      <label>Calories</label>
      <Input
        value={newFood.calories}
        type="number"
        onChange={(e) => {
          setNewFood({ ...newFood, calories: e.target.value });
        }}
      />

      <label>Servings</label>
      <Input
        value={newFood.servings}
        type="number"
        onChange={(e) => {
          setNewFood({ ...newFood, servings: e.target.value });
        }}
      />
      <button
        type="submit"
        onClick={() => {
          console.log('New Food: ', newFood);
          addFoodFunction((kira) => [newFood, ...kira]);
          setNewFood({ name: '', image: '', calories: 0, servings: 0 });
        }}
      >
        Create
      </button>
    </form>
  );
}

function Search({ filterFoodList }) {
  const [search, setSearch] = useState('');
  console.log('SEARCH: ', search);
  return (
    <>
      <Divider>Search</Divider>

      <label>Search</label>
      <Input
        value={search}
        type="text"
        onChange={(event) => {
          setSearch(event.target.value.toLowerCase());
        }}
      />
      {filterFoodList(search)}
    </>
  );
}

export default App;
