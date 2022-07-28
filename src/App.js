import logo from './logo.svg';
import './App.css';
import foodsData from './foods.json'
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';
import { toHaveFormValues } from '@testing-library/jest-dom/dist/matchers';

 
function App() {

  const [foods,setFood] = useState(foodsData)

  //add
  const [foodData,setFoodData]= useState(foodsData)

  const addFoods = food=>{
    const updateFoodData =[...foodData,food]
    const updateFood=[...foods,food]

    setFoodData(updateFoodData)
    setFood(updateFood)
  }

  const hadndleDelete =(name)=>{
    const newFoods= foods.filter(food=>food.name !== name)
    setFood(newFoods)
  }
 
  



  return (
    <div className="App">
      {/**Iteracion 1 
      <div>
        <p>Lista de comidas</p>
      <p> {foods[0].name} </p>
      <img src={foods[0].image} width={100} />
      </div>

      
    <div>
      {foods.map(food=>{
        return(
        <div><h4>{food.name}</h4> <img src={food.image} width={100}/></div> 
        )
      })}
    </div>*/}


    {/**Iteracion 2 
    <FoodBox name={foods[0].name} image={foods[0].image} calories={foods[0].calories} servings={foods[0].servings}/>
    */}

    
      <h1>Food List</h1>
      <div>
        <Search>Search</Search>
      </div>

    <div className='wrapper'>
    {foods.map(food=>{
        return(
       
          <FoodBox 
          name={food.name} image={food.image} calories={food.calories} servings={food.servings}
          foods={foods}
          hadndleDelete={hadndleDelete}
          />
         
        )
      })}
    </div>

      <div className='formAdd'>
      <AddFoodForm addFood={addFoods} ></AddFoodForm>
      </div>

      



    </div>
  );
}

export default App;
