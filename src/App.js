import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import Search from './components/Search';


function App() {

  let [foodList, setFoodList] = useState(foods)

  const [searchFood, setSearchFood] = useState(foodList)

  const [newFood, setNewFood] = useState({
    name: "",
    image: "",
    calories: 0,
    quantity: 0
  })

  let [error, setError] = useState(null)

  const handleChange = (event) => {
    setNewFood({
        ...newFood,
        [event.target.name]: event.target.value
    })
    console.log(newFood)
  }

  const addFood = (event) => {
    event.preventDefault()

    if(!newFood.name.trim() || !newFood.calories.trim()) {
        setError('Fields name and calories must be filled.')
        return;
    }
    setFoodList([
        ...foodList, 
        newFood
    ])
    setSearchFood([
      ...searchFood,
      newFood
  ])
    setError(null)
    setNewFood({
        name: "",
        image: "",
        calories: 0,
        quantity: 0
    })
  }

  let [showForm, setShowForm] = useState(false)

  function showAdd() {
    setShowForm(true)
  }
  
  return (
    <>
      <Search data={foodList} setSearchFood={setFoodList} searchFood={searchFood}/>
      <FoodBox food={foodList} />
      <button onClick={() => showAdd()}> Add new food</button>
     <div>
           <h2>Add Food Form</h2> 
           <form onSubmit={(e) => addFood(e)} >
               <h3>Name</h3>
               <input
                    name="name"
                    onChange={(e) => {handleChange(e)}}
                    value={newFood.name}
               />
               <h3>Calories</h3>
               <input
                   name="calories"
                   onChange={(e) => {handleChange(e)}}
                   value={newFood.calories}
               />
               <h3>Image</h3>
               <input
                   name="image"
                   onChange={(e) => {handleChange(e)}}
                   value={newFood.image}
               />
               <h3>Quantity</h3>
               <input
                   name="quantity"
                   onChange={(e) => {handleChange(e)}}
                   value={newFood.quantity}
               />
               <button>Add Food</button>
           </form> 
        </div>

    </>
  );
}

export default App;
