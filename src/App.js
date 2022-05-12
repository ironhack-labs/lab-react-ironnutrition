import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import Foodbox from './components/Foodbox';
import Search from './components/Search';

// const foodsArr = foods;




function App() {

const [food, setFood] = useState(foods)
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [calories, setCalories] = useState("");
const [search, setSearch] = useState("")



  const handleNameChange = (e)=>{
    console.log(e)
    setName(e.target.value)
  }
  const handleImageChange = (e)=>{
    setImage(e.target.value)
  }
  const handleCaloriesChange = (e)=>{
    setCalories(e.target.value)
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFood((prevFood)=>{
      const newFood ={
        name: name,
        image: image,
        claories: calories
      }
      
     const newFoodArr = [newFood, ...prevFood]
     console.log(newFoodArr)
     return newFoodArr;
    })
    return 
  }

  

  const searchFood = (search)=>{
    setSearch(search)
    setFood((prevFood)=>{
     const newArr = prevFood.filter((name)=>{
      return name.name.includes(search)
      })
      const result = [...newArr];
      return result;
    })
  }

  return (
    <div className="App">

    <form onSubmit={handleSubmit} className="create-food">
    name: 
      <input type='text' name='name' value={name} onChange={handleNameChange}></input>
      image:
      <input type='text' name='image' value={image} onChange={handleImageChange}></input>
      calories:
      <input type='text' name='calories' value={calories} onChange={handleCaloriesChange}></input>
      <button>Add new Food</button>
    </form>
    <Search searchFood={searchFood} search={search}/>
     <Foodbox foodsArr = {food}/>
    </div>
  );
}

export default App;
