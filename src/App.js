import React, { useState } from 'react';
import './App.css';
import AddFood from './components/AddFood';
import FoodBox from './components/FoodBox';
import allFoods from './foods.json'
import FoodList from './components/FoodList';
import SearchFood from './components/SearchFood';


function App() {

  // Creamos los distintos estados que vamos a necesitar
  
  const [ foodsArr, setFoodsArr ] = useState(allFoods) // Nuestro array original donde añadiremos y eliminaremos 

  const [ filteredArr, setFilteredArr ] = useState(allFoods) // Estado que usaremos para filtrar y mostrar 

  const [ listFoodArr, setListFoodArr ] = useState ([]) // Nuevo array para la lista de comidas

  const addFoodToArr = newFood => setFoodsArr([...foodsArr,newFood])

  const addFoodShow = newFood => setFilteredArr([...filteredArr,newFood])

  const addFoodToListArr = newListFood => setListFoodArr([...listFoodArr,newListFood])

  //Filtro para la busqueda de comida  
  const filterByString = stringSearch => {
    const filteredFood = foodsArr.filter( food => {
      return food.name.toLowerCase().includes(stringSearch.toLowerCase())
    })
    setFilteredArr(filteredFood)
  }

  return (
    <div className="App">
      <AddFood handleAddFood = {addFoodShow} />
      <div className='search'>
        <SearchFood handleSearch = {filterByString} />
      </div>
      
      <div>
        {
          filteredArr.map((elem, index) =>{
            return <FoodBox allFoods={elem} key={index} handleFoodList={addFoodToListArr}/>
          })
        }
        
        <FoodList foodList={listFoodArr} />
      </div>
      
      

    </div>
  );
}

export default App;
