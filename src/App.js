import './App.css';
import foods from './foods.json';
import React, {useState} from 'react';
import FoodBox from './components/Foodbox';
import {Row} from 'antd'
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  const [foodList,setFoodList] = useState(foods);
  const [foodBackup,setFoodBackup] = useState(foods);
  const [hide, setHide] = useState(false)


  const addFoodFn = (datos) =>{
    console.log(datos);
    const newFoods = [...foodList,datos];
    setFoodList(newFoods);
    setFoodBackup(newFoods)

  }

  const searchFn = (term) =>{
    // console.log(term);
    const matches = foodBackup.filter((food)=>{
      return food.name.toLowerCase().includes(term.toLowerCase())
    })
    setFoodList(matches);
  }

  const deleteFood = (posicion) =>{
    console.log("Delete", posicion);
    const newFoodList = [...foodList];
    newFoodList.splice(posicion,1)
    setFoodList(newFoodList)
    setFoodBackup(newFoodList)
  }

  const hideAdd= ()=>{
      // setHide(!hide)
      setHide((valorActual)=>!valorActual)
  }
  return (
    <div className="App" >
    <button onClick={hideAdd}>{hide ? "Show" : "Hide"}</button>
    {!hide && <AddFoodForm addFoodFn= {addFoodFn}/>}
    <Search searchFn={searchFn}></Search>
    <Row style={{justifyContent:"center"}} gutter={[10,10]}>
    {foodList.map(({name,image,calories, servings}, index)=>{
      return(
        <div key={name}>
        <FoodBox 
        name={name}
         image={image} 
         calories={calories} 
         servings={servings}
         deleteFood={deleteFood}
         index= {index}
         />
         </div>
          )
                                                            })
    }
    {foodList.length === 0 && (
      <div>
        <h3>
          Opsss
        </h3>
        <img src="https://i1.sndcdn.com/avatars-Svw9ZyyzGQhWH2ao-YfBvLQ-t500x500.jpg" alt=""/>
      </div>
    )}
  </Row>
    </div>
  );
}

export default App;
