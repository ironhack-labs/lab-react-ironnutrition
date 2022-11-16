import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './component/FoodBox';
import AddFoodForm from './component/AddFoodForm';
import SearchBar from './component/SearchBar';


  function App() {
    const [itens, setItens] = useState(foods);
    const [showFood, setShowFood] = useState(foods);

    const createFood = (newFood) => {
      const food = [newFood, ...itens]
      setItens(food)
      setShowFood(food)
    }

    const filterFood = (searchQuery) => {
    
      let filteredFood = itens.filter((food) =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
      setShowFood(filteredFood);
    }; 


    const deleteFood = (foodName) => {
    
      let deletedFood = foods.filter((food) => food.name !== foodName)
      
      
      setItens(deletedFood)
      setShowFood(deletedFood)
    }; 

  
    return (

      <div className="App">
      <SearchBar filterFood = {filterFood}/>
      <AddFoodForm createFood={createFood}/>

        {showFood.map((food) => {
          return (
            <div>
              <FoodBox food = {food} deleteFood={deleteFood}/>
            </div>
          );
        })}
        
        <SearchBar filterFood={filterFood} />
        
        
      </div>


    );
  }


export default App;
/* function App(props) {
  const [items] = useState(foods);
  const {food} = props
   const teste = items.map((items2) => {
    return items2.name 
  })  */

/*         {items.map((food) => {
          return <div ><p>{food.name}</p>
          <img src={food.image} alt={food.name}/></div>
        })} */

/*         <FoodBox food={ {
            name: "Orange",
            calories: 85,
            image: "https://i.imgur.com/abKGOcv.jpg",
            servings: 1
          }} /> */