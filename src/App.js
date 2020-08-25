import React, { useState } from 'react';
import FoodBox from './component/FoodBox';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

const styles = {
  container: {
    width: '100%',
    display: 'flex',
  },
  cards: {
    width: '100%',
  },
  form: {
    width: '100%',
  },
};

function Form(props) {
  return (
    <form
      style={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={props.handleSubmit}
    >
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={props.newFood.name}
        onChange={props.handleChange}
      />
      <input
        name="calories"
        type="number"
        placeholder="calories"
        value={props.newFood.calories}
        onChange={props.handleChange}
      />
      <input
        name="image"
        type="text"
        calories=""
        placeholder="image url"
        value={props.newFood.image}
        onChange={props.handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}

function SearchBar(props) {
  return (
  <div> 
     <label>
       Search:
     </label>
     <input
      type="text"
      value={props.searchParam}
      onChange={props.handleSearchParam}
      placeholder="search food"
    />
  </div>
   
  );
}

function App() {
  const [foodList, setFoodList] = useState(foods);
  const initialState = { name: '', image: '', calories: '' };
  const [newFood, setNewFood] = useState(initialState);
  const [searchParam, setSearchParam] = useState('');
  const [todayFoods, setTodayFoods] = useState([]);
  const handleChange = (event) => {
    setNewFood({
      ...newFood,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFoodList([newFood, ...foodList]);
    setNewFood(initialState);
  };
  const handleSearchParam = (event) => {
    setSearchParam(event.target.value);
  };

  const handleAddTodayFood = (food) => {
    setTodayFoods([food, ...todayFoods]);
  };

  const displayCards = foodList
    .filter((food) => {
      return food.name.toLowerCase().includes(searchParam.toLowerCase());
    })
    .map((food, indx) => {
      return (
        <FoodBox
          key={indx}
          name={food.name}
          image={food.image}
          calories={food.calories}
          total={food.total}
          handleAddTodayFood={handleAddTodayFood}
        />
      );
    });
  const displayTodayFoods = todayFoods.map((food, index) => (
    <div key={index} style={{ border: '1px solid purple' }}>
      <h4>{food.name}</h4>
      <p>{food.calories}</p>
      <p>{food.quantity}</p>
       <p>{food.total}</p>
    </div>
  ));
  return (
    <div style={styles.container}>
      <header style={{width:"100%"}}>
      <h1 className="title is-1">IronNutrition</h1>
      <div style={styles.cards}>
        <SearchBar
          searchParam={searchParam}
          handleSearchParam={handleSearchParam}
        />
        {displayCards}
      </div>
      </header>
      <br/>
    
      <div className="ma" style={styles.form}>
        <Form
          newFood={newFood}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div>
          <h3>Today Foods</h3>
          <div>{displayTodayFoods}</div>
        </div>
      </div>
    </div>
  );
}

export default App;