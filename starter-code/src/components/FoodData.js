import React, { useContext} from 'react';
import {FoodContext} from './foodContext';
import FoodBox from './FoodBox';

const FoodData = () => {

  const [allFoods, setFoods] = useContext(FoodContext);

  const addFood = (i) => {
    const newList = allFoods;
    const listToday = []
    let newFood = newList[i];
    let qty = newFood.quantity += 1;
  
    let allCalories = newList[i].calories * qty
    newFood.calories = allCalories;
    listToday.push(newFood)
    console.log(listToday)
  
   
   
  }
  return(
    <div>
      {allFoods.map((e, i) => {
        return (
          <FoodBox
            key={i}
            name={e.name}
            image={e.image}
            calories={e.calories}
            click={() => addFood(i)}
          />
        );
        
      })}
    </div>
  )
}

export default FoodData;