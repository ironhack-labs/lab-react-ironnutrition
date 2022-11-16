
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Searchbar from './components/Search';

function App() {
  const [items, setItems] = useState(foods);
  const [showCibo, setShowCibo] = useState(foods);

  const createFood = (newFood) => {
    const cibo = [newFood, ...items]
    setItems(cibo)
    setShowCibo(cibo)
  }
  const filterFood = (searchQuery) => {
    
    let filteredFood = items.filter((cibo) => 
    cibo.name.toLowerCase().includes(searchQuery.toLowerCase()));
    setShowCibo(filteredFood);
  };

  const deleteFood = (foodName) => {
    let deletedFood = foods.filter((cibo) => cibo.name !== foodName)

    setItems(deletedFood)
    setShowCibo(deleteFood)
  };

  return (
    <div className="App">
    <Searchbar filterFood={filterFood}/>
    <AddFoodForm createFood={createFood}/>

      {showCibo.map((cibo) => {

        return (<div>
        
        <FoodBox food ={cibo} deleteFood={deleteFood}/>
        
        
        </div>
        );
        
      })}

      

      

     {/* <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} /> */}


    </div>
  );
}

export default App;


