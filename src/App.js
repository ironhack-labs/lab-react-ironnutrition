import './App.css';
import {useState} from 'react'
import { Row, Divider, Button } from 'antd';
import foodsJson from "./foods.json"
import FoodBox from './components/Foodbox';
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search'

function App() {

  const [foods, setFoods] = useState(foodsJson)
  const [filteredFoods, setFilteredFoods] = useState(foodsJson)
  const [displayForm, setDisplayForm] = useState(true)

  const AddFood = newFood => {
    setFoods([...foods, newFood])
  }

  const resultsSearch = wordToSearch => {
    if(wordToSearch === "") setFilteredFoods(foods)
    else {
      const filteredFoods = foods.filter(food => {
        return food.name.toLowerCase().includes(wordToSearch.toLowerCase())
      })
      setFilteredFoods(filteredFoods)
    }
  }

  const deleteFood = name => {
    const newFoods = filteredFoods.filter(food => {
      return food.name !== name
    })
    setFilteredFoods(newFoods)
  }


  return (
    <div className="App">
      
      { displayForm ?
        <AddFoodForm AddFood={AddFood} />
        : <></>
      }
      <Button onClick={(() => setDisplayForm(!displayForm))}> 
        {displayForm? <>Hide Form</> : <>Add New Food</> }
      </Button>

      <Search resultsSearch={resultsSearch} />

      <Divider>Food List</Divider>

      <div className="food-list">

      {/* Iteration1
        { foods.map(food => {
          return (
            <div key={food.name} >
              <p> {food.name} </p>
              <img src={food.image} width={100} alt={food.name} />
            </div>
          )})
        } */}
        
        <Row style={{ width: '100%', justifyContent: 'center' }}>
          {
            filteredFoods.length === 0?
            <h3>Oops! There is no more content to show</h3>
            : 
            <>
              {filteredFoods.map(food => {
                return <FoodBox key={food.name} food={food} deleteFood={deleteFood}/>
              })}
            </>
          }
        </Row>

      </div>
      
    </div>
  );
}

export default App;
