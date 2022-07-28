// src/App.js
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import 'antd/dist/antd.css';
// To start using the pre-made Ant Design components we must first import them:
import foods from './foods.json';
import { useState } from 'react';

function App() {
  const [food, setFoods] = useState(foods);

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const deleteFood = (foodName) => {
    setFoods((prevFoods) => {
      const newList = prevFoods.filter((element) => {
        return element.name !== foodName;
      });
      return newList;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = {
      name: name,
      image: image,
      calories: calories,
      servings: servings,
    };
    // update list of foods
    setFoods((prevFoods) => {
      return [newFood, ...prevFoods];
    });
    // clear form
    setName('');
    setImage('');
    setCalories('');
    setServings('');
  };

  return (
    <div className="App">
      <Search food={food} setFoods={setFoods} />
      <AddFoodForm
        food={food}
        setFoods={setFoods}
        name={name}
        setName={setName}
        image={image}
        setImage={setImage}
        calories={calories}
        setCalories={setCalories}
        servings={servings}
        setServings={setServings}
        handleSubmit={handleSubmit}
      />
      {food.map((foodObj) => {
        return (
          <div key={foodObj.name}>
            {/* <p>{foodObj.name}</p>
            <img src={foodObj.image} width={200} alt={foodObj.name} /> */}
            <FoodBox {...foodObj} callbackToDeleteFood={deleteFood} />
          </div>
        );
      })}
    </div>
  );
}
export default App;
