
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/foodbox/FoodBox';
import NewFoods from './components/newfoods/NewFoods';
import { useState } from "react";
import foodsList from './foods.json';
import AddNewFood from './components/addnewfood/AddNewFood';
import SearchBar from './components/searchbar/SearchBar';
import { TodaysFood } from './components/todaysfood/TodaysFood';





function App() {
  
  const [foods, setFoods] = useState(foodsList);
  const[showAddFood, setShowAddFood] = useState(false);
  const [filteredFoods, setFilteredFoods] = useState(foods);
  const [today, setToday] = useState([]);

  //Add Food on the list of Foods
  const addFood =(foodAdded) =>{
    const newList = [...foods, foodAdded]
   setFoods(newList)
  };

  //Filter the list on the Search Bar
  const filterFood = (input) =>{
         const filtered = foods.filter((food) => food.name.toLowerCase().includes(input.toLowerCase()))
          setFilteredFoods(filtered);
     
    };

    //Add Food on the Todays List
  const addTadaysFood =(novaFood) => {
    let todayCopy = [...today]
    let found = today.find(food => food.name === novaFood.name) 
    if(found) {
      found.quantity += novaFood.quantity;
    } else {
      todayCopy.push(novaFood);
    }
    setToday(todayCopy);
  }
  

  return (
    <div className="App">
      <h1 className="title">IronNutrition</h1>
    <div>
    <div>
      <SearchBar filterFood={filterFood} />
     </div>
    <AddNewFood 
        onAdd={() => setShowAddFood(!showAddFood)}
        showAdd={showAddFood} />
    </div>
    
    <div>
        {showAddFood && <NewFoods onAdd={addFood} />}
    </div>
    <div className='list'>
      <div>
        {filteredFoods.map((item) => 
          <FoodBox key={item.name} {...item} addTodaysFood={addTadaysFood}/>
          )}
          </div>
     <div>
      <TodaysFood today={today}/>
      </div>
    </div>
    </div>
  );
}

export default App;
