import React, { useEffect, useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import fods from './foods.json';
import FoodBox from './components/FoodBox/index';

function App() {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [image, setImage] = useState('');
  const [quantity, setQuantity] = useState('1');
  const [foods, setFoods] = useState(fods);
  const [display, setDisplay] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [choices, setChoices] = useState([]);
  const [choicesTotal, setChoicesTotal] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    const foodsCopy = [...foods];
    foodsCopy.push({ name: name, calories: calories, image: image, quantity:quantity });
    setFoods(foodsCopy);
    let form = document.getElementById('foodForm');
    form.style.display='none';
  };

  const handleAddClick = () =>{
    let form = document.getElementById('foodForm');
    display?form.style.display='block':form.style.display='none';
    setDisplay(!display)
  }

  useEffect(()=>{

  },[foods])

  const handleChange = (e) =>{
    const {value} = e.target;
    setSearchValue(value);
    setFilteredFoods(foods.filter(food =>{
      return food.name.toLowerCase().includes(value.toLowerCase())
    }))
  }

  const handleAddChoice = (food)=>{
    let choicesCopy = [...choices];
    choicesCopy.push(food)
    setChoices(choicesCopy)
    let total = parseInt(food.quantity)*parseInt(food.calories)
    console.log(total)
    setChoicesTotal(()=>choicesTotal+total)
  }

  const handleQuantityChange = (e,foodName) =>{
    console.log(e.target.value)
    let foodsCopy = [...foods]
    foodsCopy.forEach(food =>{
      if (food.name.toLowerCase() === foodName.toLowerCase()){
        food.quantity=e.target.value;
        console.log(e.target.value)
      }
    })
    setFoods(foodsCopy)
  }


  return (
    <div className="App columns">
      <div className="column">
      <input value={searchValue} onChange={(e)=>handleChange(e)} type='text' placeholder='search'/>
      <div>
        <button onClick={handleAddClick}>Add Food</button>
        <form style={{display: 'none'}} id='foodForm' onSubmit={handleSubmit}>
          <input
            key='name'
            name="name"
            type="text"
            onChange={
              (e)=>setName(e.target.value)
            }
            value={name}
            id="foodNameInput"
            placeholder="name"
          />
          <input
            key='calories'
            name="calories"
            type="text"
            onChange={(e) => setCalories(e.target.value)}
            value={calories.toString()}
            id="foodCaloriesInput"
            placeholder="calories"
          />
          <input
            key='image'
            name="image"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            id="foodImageInput"
            placeholder="img Url"
          />
          <input
            key='quantity'
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity.toString()}
            type="text"
            id="foodQuantityInput"
          />

          <button type="submit">Save</button>
        </form>
      </div>
      <div className="foods-container">
        {filteredFoods.length>0 && filteredFoods.map((food) => {
          return <FoodBox handleQuantityChange={handleQuantityChange} handleAddChoice={handleAddChoice} key={food.name} food={food} />;
        })}
        {!searchValue && foods.map((food) => {
          return <FoodBox handleQuantityChange={handleQuantityChange} handleAddChoice={handleAddChoice} key={food.name} food={food} />;
        })}
      </div>
      </div>
      <div className="column">
        <div style={{marginTop:'50px'}}>
          <h1 style={{fontSize:'1.2rem', fontWeight:'bold'}}>Today's Choices:</h1>
          <ul>
          {choices.length>0 && choices.map((food) =>{
            return <li key={food.name}>{food.quantity} {food.name} = {parseInt(food.quantity)*parseInt(food.calories)}kcal</li>
          })}
          </ul>
          <p>Total: {choicesTotal} kcal</p>
        </div>
      </div>
    </div>
  );
}

export default App;
