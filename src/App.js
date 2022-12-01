import './App.css';
import foods from './foods.json';
import React, { useState } from 'react';
import FoodBox from './components/foodbox';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from "./components/Search";

function App() {
  const [FoodList , setFoodList] = useState(foods)
  const [foodbackup, setfoodbackup] = useState (foods)
  const [hide, setHide] = useState(false)

  const addFoodFn = (datos) =>{
    const newFood = [...FoodList,datos]
    setFoodList(newFood)
    setfoodbackup(newFood)
  }
  const Searchfm = (term) => {
    const matches = foodbackup.filter((food)=>{
      return food.name.toLowerCase().includes(term.toLowerCase())
    })
    setFoodList(matches)
  }

  const deleteFood= (posicion) =>{
    const newFoodList = [...FoodList]
    newFoodList.splice(posicion, 1)
    setFoodList(newFoodList)
    setfoodbackup(newFoodList)
  }
  const hideadd= ()=>{
    // setHide(!hide)
    setHide((valorActual)=>!valorActual)

  }
  return <div className="App">
  <button onClick={hideadd}>{hide? "Add food":"Hide"}</button>
  {!hide && <AddFoodForm addFoodFn= {addFoodFn}/>}
  <Search Searchfm= {Searchfm}/>
  <Row style={{justifyContent : 'center'}} gutter={[10 , 10]}>
    {FoodList.map (({name, image , calories , servings}, index)=> {
      return (
      <div key = {name}>
      <FoodBox 
      name= {name} 
      calories= {calories}  
      image= {image} 
      servings= {servings}
      deleteFood= {deleteFood}
      index = {index}
      />
      </div>
      )})
    }
    {FoodList.length === 0 &&(
      <div>
        Opps! Theres no more content to show
      </div>
    )}
    </Row>
  </div>;
}
export default App;