import React, { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import {Row} from 'antd'
import AddFoodForm from './components/AddFormFood';
import Search from './components/Search'

function App() {

  //foods viene de json
  const [foodList, setFoodList] = useState(foods);
  const [foodBackup, setFoodBackup] = useState(foods)
  const [hide, setHide] = useState(false)

  // para poder connectar app con el conponente de la form en addFood
  const AddFoodFn = (datos) => {
     console.log(datos);
     const newFoods = [...foodList, datos];
     setFoodList(newFoods);
     setFoodBackup(newFoods);
  }

  const searchFn = (term) => {
  //console.log(term);

  const matches = foodBackup.filter((food) => {
    return food.name.toLowerCase().includes(term.toLowerCase())
    }
  )
   setFoodList(matches);
  }  
 
  const deleteFood = (posicion) => {
    console.log("delete", posicion);
    const newFoodList = [...foodList]

    newFoodList.splice(posicion, 1);
    setFoodList(newFoodList);
    setFoodBackup(newFoodList);
  }

  const hideAdd = () => {
     //setHide(!hide)
     setHide((valorActual) => !valorActual)
  }

  return (
    <div className="App" >
      <button onClick={hideAdd}>{hide? "Show" : "Hide"}</button>
      {!hide &&<AddFoodForm  addFoodFn ={AddFoodFn}/>}
      
      <Search searchFn={searchFn} />
      <Row style={{justifyContent:"center"}} gutter={[10,10]} >
      {foodList.map(({name, image, calories, servings}, index) =>{

        return (
        
            <FoodBox 
            name={name} 
            image={image} 
            calories={calories}
            servings={servings} 
            key={name}
            deleteFood={deleteFood}
            index= {index}
            />
          
          )
        })  
      }
      {foodList.length === 0 && (
         <div>
             <h3>oops! theirs no more content to Show</h3>
             <img src="https://i1.sndcdn.com/avatars-Svw9ZyyzGQhWH2ao-YfBvLQ-t500x500.jpg" alt="image"/>
         </div>
      )}
      </Row>
    </div>
  );
}

export default App;
