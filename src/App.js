import foods from './foods.json';
import './App.css';
import FoodBox from "./component/FoodBox"
import { useState } from 'react';
import AddFoodForm from './component/AddFoodForm';
import Search from './component/Search';


function App() {
  const [foodsArr, setFoodsArr] = useState(foods)
  const [displayHideObj,setDisplayHideObj] = useState({isHidden:true,displayHideText:"add new food"})

  const [searchQuery,setSearchQuery]=useState("")

  const listToDisplay = foodsArr.filter(food=>
    food.name.toLowerCase().includes(searchQuery.toLowerCase()))

  const createFood = (newfoodObj) =>{
   setFoodsArr((prevFoodArr) => {
   const newArr = [newfoodObj, ...prevFoodArr];
   return newArr;
   }) 
  }
  const deleteFood = (foodName) => {
    
     const newListOfFood = foodsArr.filter((food) => {
       return food.name !== foodName;
     })
     setFoodsArr(newListOfFood)
  }

  
  const displayHideForm = ()=>{
     setDisplayHideObj(prevObj=>{
      const newObj={}
      if(prevObj.isHidden) {
        newObj.isHidden=false
        newObj.displayHideText="Hide form"
      }else{
        newObj.isHidden=true
        newObj.displayHideText ="Add new food"
      }
    
      return newObj
     })
  }
  

  return (
    <div className="App">

      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />


      <button className="add-button" type='button' onClick={displayHideForm}>
        {displayHideObj.displayHideText}
      </button>
      <AddFoodForm isHidden={displayHideObj.isHidden} createFood={createFood} />


      <div className='food-list'>
        {foodsArr.length === 0 ? 
        (<div className="oops">Oops there is no more food  </div>) 
        : 
        (listToDisplay.map((food) => {
            return (
              <FoodBox food={food} deleteFood={deleteFood} key={food.name} />
            );
          })
        )}
      </div>
    </div>
  );
}
export default App;