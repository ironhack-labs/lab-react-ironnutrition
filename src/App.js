import React, { useState } from 'react';
import './App.css';
import Foodbox from './components/Foodbox';
import foods from './foods.json';
import { Row } from 'antd';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [foodBackup, setFoodBackup] = useState(foods);
  const [hide, setHide] = useState(false)

  const addFoodFn = (datos) => {
    const newFoods = [...foodList, datos];
    setFoodList(newFoods);
    setFoodBackup(newFoods)
  };

  const searchFN = (term) => {
    console.log('term', term);
    const matches = foodBackup.filter((food) => {
        return food.name.toLowerCase().includes(term.toLowerCase())
      }
    )
    setFoodList(matches)
  };

  const deleteFood= (posicion)=>{
    console.log("Deleteishon", posicion)
    const newFoodList = [...foodList]
    newFoodList.splice(posicion, 1)
    setFoodList(newFoodList)
    setFoodBackup(newFoodList)
  }

  const hideAdd=()=>{
    //setHide(!hide)
    setHide((valorActual)=>!valorActual)
  }

  return (
    <div className="App">
      <button onClick={hideAdd}>
        {hide ? "Add food" : "Hide"}
      </button>
      {!hide && <AddFoodForm AddFoodFn={addFoodFn}/>}
      <Search searchFN={searchFN}></Search>
      <Row style={{ justifyContent: 'center' }} gutter={[10, 10]}>
        {foodList.map(({ name, image, calories, servings }, index) => {
          return (
            <div key={name}>
              <Foodbox
                name={name}
                image={image}
                calories={calories}
                servings={servings}
                deleteFood={deleteFood}
                index={index}
              />
            </div>
          );
        })}
        {foodList.length === 0 && <div> <h3>Oh no!! there are any food yet</h3> </div>}
      </Row>
    </div>
  );
}

export default App;
