import foodsArr from "./foods.json";
import './App.css';
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import { Row } from "antd";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./Search";


function App () {

  const [foods, setFoods] = useState(foodsArr)
  const [foodsData, setFoodsData] = useState(foodsArr)

  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState(0)
  const [servings, setServings] = useState(0)  
  
  const [searchStr, setSearchStr] = useState('')

  function handleSubmit(e){
    e.preventDefault()
    console.log('Submit')

    console.log(name, image, calories, servings)

    setFoods([...foods, {name, image, calories, servings}])

    setName('')
    setImage('')
    setCalories(0)
    setServings(0)

  }

  const handleNameInput = (e) => setName(e.target.value)
  const handleImageInput = (e) => setImage(e.target.value)
  const handleCaloriesInput = (e) => setCalories(e.target.value)
  const handleServingsInput = (e) => setServings(e.target.value)

  function searchFood(e){
    const searchInput = e.target.value.toLowerCase()
    setSearchStr(searchInput)

    if(searchInput === ''){
      console.log('empty')
      setFoods(foodsData)
    }

    const filteredFoods = foodsData.filter(food => {
      return food.name.toLowerCase().includes(searchInput)
    })
    
    setFoods(filteredFoods)
  }

  function deleteFood(name){
    const newArr = foods.filter(food => food.name !== name) 
    setFoods(newArr)
    setFoodsData(newArr)
  }

  return(
    <div className="App">
      <AddFoodForm 
        handleSubmit={handleSubmit}
        handleNameInput={handleNameInput}
        handleImageInput={handleImageInput}
        handleCaloriesInput={handleCaloriesInput}
        handleServingsInput={handleServingsInput}
        inputStates={{name, image, calories, servings}}
      />
      <Search searchFood={searchFood} searchStr={searchStr}/>
            
      <Row>

        {foods.map(food => {
          return(

            
            <FoodBox food={food} deleteFood={deleteFood} />
            )
        })} 
      

      </Row>

    </div>
  )
}
export default App;