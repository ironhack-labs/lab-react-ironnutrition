// src/App.js
import './App.css';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import 'antd/dist/antd.css';
// To start using the pre-made Ant Design components we must first import them:
import foodsArray from './foods.json';
import { useState } from 'react';

function App() {
  const [allFoods, setAllFoods] = useState(foodsArray);
  const [viewedFoods, setViewedFoods] = useState(foodsArray);
  const [searched, setSearched] = useState('');

  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState('');
  const [servings, setServings] = useState('');

  const deleteFood = (foodName) => {
    setViewedFoods((prevFoods) => {
      const newList = prevFoods.filter((element) => {
        return element.name !== foodName;
      });
      return newList;
    });
    setAllFoods((prevFoods) => {
      const newList = prevFoods.filter((element) => {
        return element.name !== foodName;
      });
      return newList;
    });
  };

  const searchFoods = (searched) => {
    setViewedFoods((prevFoods) => {
      const results = allFoods.filter((element) => {
        return element.name.toLowerCase().includes(searched.toLowerCase());
      });
      return results;
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
    setAllFoods((prevFoods) => {
      return [newFood, ...prevFoods];
    });
    setViewedFoods((prevFoods) => {
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
      <Search
        allFoods={allFoods}
        setAllFoods={setAllFoods}
        viewedFoods={viewedFoods}
        setViewedFoods={setViewedFoods}
        searchFoods={searchFoods}
        setSearched={setSearched}
        searched={searched}
      />
      <AddFoodForm
        allFoods={allFoods}
        setAllFoods={setAllFoods}
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
      {viewedFoods.map((foodObj) => {
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
