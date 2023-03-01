import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

function App() {
  
  const [list, setList] = useState(foods);

  const addFood = (food) => {
    const foodListCopy = [...list, food]
    setList(foodListCopy)

  return (
    <div className="App">
   {/* {list.map((el) => { */}
  {/* //       return (
  //         <div key={el.name} >
  //           <p>{el.name}</p>
  //           <img src={el.image} alt="foodImage" className="src" width={100} />
  //         </div>
  //       );
  //     })} */}

  <AddFoodForm addFood={addFood} />
    {food.map((food) => {
      return <FoodBox food={food} key={food.name} />;
    })}

  {/* {list.map((food) =>
    <FoodBox food={ {
 name: food.name,
 calories: food.calories,
 image: food.image,
  servings: food.servings,
 }} />
  )} */}

      {/*   <p> {foods.name.map(list)} </p>
   <img src={foods.image.map(list)} alt="foodsPicture" className="src" width={0} /> */}
  
   {/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
  }} /> */}

  
    
    </div>
  
  );
}
}

export default App;