import './App.css';
import 'antd/dist/reset.css';
import foodData from "./foods.json"
import {Button, Divider, Row} from "antd"
import FoodBox from './components/FoodBox';
import AddFoodFoorm from './components/AddFoodForm';
import Search from './components/Search';
import { useEffect, useState } from 'react';
import { FormStore } from 'rc-field-form/es/useForm';


function App() {

const [food, setFoods] = useState(foodData) 
const [word, setWord] = useState("")
const [hidden, setHidden] = useState(false)

const addFood = (newFood) => {
setFoods(prevState => [...prevState, newFood])
}

const onSearch = (word) =>{
  setWord(word)
}

const foodDelete = (index_food) => {
    const newFoodList = [...food]
    newFoodList.splice(index_food, 1);
    setFoods(newFoodList)
  }

useEffect(()=>{
  console.log("useEffect, me ejecuto");
}, [])

useEffect(()=>{
  console.log("Cantidad de comida", food.length);
}, [food.length])

  return (
    <div className="App">
      {!hidden && <AddFoodFoorm addFood={addFood}/>}
      <Button onClick={()=> setHidden(!hidden)}> 
      {!hidden ? "Hide Form" : "Add New Food"} 
      </Button>

      <Search onSearch={onSearch}/>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {food.filter((itemFood)=> itemFood.name.toLowerCase().includes(word.toLowerCase()) 
        ).length
        ? food.filter((itemFood)=> itemFood.name.toLowerCase().includes(word.toLowerCase()) 
        )
        .map((food, index_food)=> <FoodBox //{...food}
          key={index_food}
          food={food}
          foodDelete={()=> foodDelete(index_food)}
          //nueva propiedad para que foodBox lo reciba
          />
        ) : "No hay productos"}
        
      </Row>
    </div>
  );
}

export default App;
