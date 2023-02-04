import { FoodBox, FoodForm } from './components';
import foods from './foods.json';
import './App.css';
import { Col, Row, Divider, Input } from 'antd';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');
  const [search, setSearch] = useState('');

  const createName = (value)=>{
    setName(value)
  }
  const createImage = (value)=>{
    setImage(value)
  }
  const createCalories = (value)=>{
    setCalories(value)
  }
  const createServings = (value)=>{
    setServings(value)
  }

  const setToEmpty = (e) => {
    setName("");
    setImage("");
    setCalories("");
    setServings("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("la data", { name, image, calories, servings });
    setToEmpty();
    foods.push({name, image, calories, servings})
  };

  const searchFood = (value)=>{
    setSearch(value)
    console.log("value to search", value);

    }
  





  return (
    <div className="App">
      <form
      onSubmit={handleSubmit}
      >
        <Divider>Add Food Entry</Divider>

        <label>Name</label>
        <Input 
        value={name}
        name="name" 
        type="text"
        autoComplete="off"
        onChange={(event) => createName(event.target.value)} 
        
        />

        <label>Image</label>
        <Input 
        value={image}
        name="image" 
        type="text"
        autoComplete="off"
        onChange={(event) => createImage(event.target.value)} 
        
        />

        <label>Calories</label>
        <Input 
        value={calories}
        name="calories" 
        type="text"
        autoComplete="off"
        onChange={(event) => createCalories(event.target.value)} 
        
        />

        <label>Servings</label>
        <Input 
        value={servings}
        name="servings" 
        type="text"
        autoComplete="off"
        onChange={(event) => createServings(event.target.value)} 
        
        />

        <button type="submit">Create</button>
      </form>

      {/* search bar */}
      <label>Search</label>
        <Input 
        value={search}
        name="name" 
        type="text"
        autoComplete="off"
        onChange={(event) => searchFood(event.target.value)} 
        
        />


      <Row justify="center">
        {foods.map((food, food_index) => (
          <Col span={8} key={food_index}>
            <FoodBox
              food={{
                name: food.name,
                calories: food.calories,
                image: food.image,
                servings: food.servings,
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default App;
