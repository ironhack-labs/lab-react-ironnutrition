import React, { useState } from 'react';
import foodList from '../foods.json';
import FoodBox from "./FoodBox";
import AddFoodForm from './AddFoodForm';
import FoodSearch from './FoodSearch';

const FoodList = () => {

  const [form, setForm] = useState(false);
  const [searching, setSearching] = useState(false);
  const [foodListState, setFoodListState] = useState(foodList);
  const [filteredfoodListState, setFilteredFoodListState] = useState([]);
  const [userFoodList, setUserFoodList] = useState([]);

  const toggleFormHandler = () => setForm(!form);

  const addFoodHandler = (addedFood) => {
    const foodListStateCopy = [...foodListState];
    toggleFormHandler();
    foodListStateCopy.push(addedFood);
    setFoodListState(foodListStateCopy);
  };

  const filterFoodHandler = (searchValue) => {
    const foodListStateCopy = [...foodListState];

    const filtered = foodListStateCopy.filter((foodItem) => {
      return foodItem.name.toLowerCase().includes(searchValue.toLowerCase());
    })

    setSearching(true);
    setFilteredFoodListState(filtered);
  }

  return(
    <section>
      <div>
        {form && <AddFoodForm addedFood={addFoodHandler}/>}

        <button className="button is-primary" onClick={() => toggleFormHandler()}>Click to add food!</button>
        <hr></hr>

        {<FoodSearch filterFood={filterFoodHandler}/>}
      </div>
      <div className="columns">
        <div className='column is-half'>
          {searching ? 
            filteredfoodListState.map((foodItem, index) => {
              return <FoodBox key={index} {...foodItem} />
            }) 
            : 
            foodListState.map((foodItem, index) => {
              return <FoodBox key={index} {...foodItem} />
            })
          }
        </div>
          <div className='column is-half'>
            <h1>Today's foods</h1>
            <ul>
              {/* userFoodList.map((userFoodItem, index) => { */}
                <li>
                  Quantity of Name of Calories of the food
                </li>
              {/* }) */}
            </ul>
          </div>
      </div>
    </section>
  );
};

export default FoodList;