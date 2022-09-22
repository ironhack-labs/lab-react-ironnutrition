import { useState } from "react";
import './App.css';
import foods from './foods.json';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/addFoodForm";
import SearchBar from "./components/SeachBar";
import { Button } from 'antd';

const App = () => {
  const [foodList, setFoodList] = useState(foods)
  const [searchfFormState, setSearchFormState] = useState('')
  const [showCreateForm, setShowCreateForm] = useState(true)
  
  const handleOnChange = (e)=>{
      setSearchFormState( e.target.value )
  }

  const handleRemove = (name) => {
    const copyFoodList = [...foodList]
    const newFoodList = copyFoodList.filter(food=>{
      return food.name !== name
    })
    setFoodList(newFoodList)
  }

  const handleShow= ()=>{
    setShowCreateForm(!showCreateForm) 
  }

  return (
    <div className="App">
    {showCreateForm && <AddFoodForm foodList={foodList} setFoodList={setFoodList}/>}
    <Button type="secondary" onClick={handleShow}>{showCreateForm ? 'Hide Form' : 'Create New Food'} </Button>
    <SearchBar searchfFormState={searchfFormState} handleOnChange={handleOnChange}/>
      <h1>Food List</h1>
      <div className="foodList">
        { foodList.length!== 0 ? foodList.filter(food=>{
              return food.name.toLowerCase().includes(searchfFormState.toLocaleLowerCase())
           }).map((food,i) => {
            return(
              <FoodBox key={i} food={food} handleRemove={handleRemove}/>
          )
        }) : <div>Ooops! There is no content to show.</div>
          
        }
      </div>
        
    </div>
  )
}

export default App;