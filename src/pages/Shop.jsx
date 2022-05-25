import React, { useState } from 'react'
import FoodBox from '../components/FoodBox';
import AddFoodForm from '../components/AddFoodForm';
import foods from '../foods.json';
import Search from '../components/Search'
import TodaysFood from '../components/TodaysFood';
import uuid from 'react-uuid';

export default function Shop() {
    const [showAddFoodForm, setShowAddFoodForm] = useState(false);
    const [food, setFood] = useState(foods);
    const [filteredFood, setFilteredFood] = useState(foods);
    const [todayFood, setTodayFood] = useState([]);

    const handleAddNew = (response) => {
        setShowAddFoodForm(false)
        setFood([response, ...food]);
        setFilteredFood([response, ...food]);
    }
    const addNewFoodForm = () => {
      setShowAddFoodForm(!showAddFoodForm)
    };
    const filterFood = (response) => setFilteredFood(food.filter(elem => elem.name.toLowerCase().includes(response.toLowerCase())));
    const addTodayFood = (response) => {
        const indexToFind = todayFood.findIndex(elem => elem.name === response.name);
        if(indexToFind === -1){
            setTodayFood([response, ...todayFood]);
        }else{
            const copyFood = JSON.parse(JSON.stringify(todayFood));
            copyFood[indexToFind] = response;
            setTodayFood(copyFood);
        }
    };
    const removeTodayFood = (response) => {
        if(todayFood.length === 1){
            setTodayFood([]);
            return;
        }
        const indexToFind = todayFood.findIndex(elem => elem.name === response.name);         
        const copyFood = JSON.parse(JSON.stringify(todayFood)).splice(indexToFind, 1);
        setTodayFood(copyFood);
    }

  return (
    <>
    <h1>IronNutrition</h1>
    <button className='button is-warning' onClick={addNewFoodForm}>Add new food</button>
    {showAddFoodForm && <AddFoodForm handleAddNew={handleAddNew}/>}
    <Search filterFood={filterFood}/>
    <div className="columns">
        <div className="column">
            {
                filteredFood.map((elem) => <FoodBox addTodayFood={addTodayFood} data={elem} key={uuid()}/>)
            }
        </div>
        <div className="column">
            <TodaysFood food={todayFood}  removeTodayFood={removeTodayFood}/>
        </div>
    </div>
    
    </>
  )
}
