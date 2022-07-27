import logo from './logo.svg';
import './App.css';
import foodsData from './foods.json'
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from 'antd/lib/transfer/search';

 
function App() {

  const [foods,setFood] = useState(foodsData)
 




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
          />
         
        )
      })}
    </div>

      <div className='formAdd'>
      <AddFoodForm></AddFoodForm>
      </div>

      



    </div>
  );
}

export default App;
