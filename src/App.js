import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox"
import Modal from "./components/Form"
import TodayFood from "./components/TodayFood"

function App() {

  let [foodArray, setFoodArray] = useState([...foods])
  let [searchValue, setSearchValue] = useState("")

  const addQuantityValue = (e, index, val) => {
    let newFoodArray = [...foodArray]
    newFoodArray[index].quantity += Number(val);
    setFoodArray(newFoodArray)
  }

  const onChangeSearchBar = (e) => {
    setSearchValue(e.target.value)
    let newFoodArray = [...foods].filter(food => food.name.toLowerCase().includes(e.target.value.toLowerCase())).map(food => food)
    setFoodArray(newFoodArray)
  }
  
  const openModal = () => {
    document.querySelector(".modal").classList.toggle("is-active")
    document.querySelector("#name").value = "";
    document.querySelector("#calories").value = "";
    document.querySelector("#picture").value = "";
  }

  const saveFood = ({name, image, calories}) => {
    console.log({name,image,calories,quantity: 0})
    setFoodArray([...foodArray,{name,image,calories,quantity: 0}])
  } 

  const deleteQuantity = (index) => {
    let newFoodArray = [...foodArray]
    newFoodArray[index].quantity = 0;
    setFoodArray(newFoodArray)
  }

  return (
    <div className="container">
      <Modal onClick={saveFood}/>
      <h1 className="title">IronNutrition</h1>
      <div>
        <button className="button is-info" onClick={() => {openModal()} }>Add Food</button>
      </div>
      <br/>
      <div>
        <input type="text" className="input search-bar" name="search" placeholder="Search" value={searchValue} onChange={e => onChangeSearchBar(e)}/>
      </div>
      <br/>
      <br/>
      <div className="columns">
        <div className="column">
        {
          foodArray.map((elem, index) => {
            return <FoodBox 
            key={index} 
            index={index} 
            name={elem.name} 
            quantity={0} 
            image={elem.image} 
            calories={elem.calories} 
            click={addQuantityValue} />
          })
        }
        </div>
        <TodayFood data={foodArray} onClick={deleteQuantity}/>
      </div>
    </div>
  );
}

export default App;
