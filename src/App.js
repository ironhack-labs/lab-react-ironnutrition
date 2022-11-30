import './App.css';
import foods from './foods.json';
import { useState } from "react";
import FoodBox from './FoodBox.js'
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function App() {
  const [list, setList] = useState(foods);
  const [input, setInput] = useState("")

  const handleAddFood = (newFood) => {
    setList([newFood, ...list])
  }

  const handleSearch = (event) => {
    setInput(event.target.value)
    const newList = foods.filter(item => {
      return item.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setList(newList)
  }

  const deleteItem = (name) => {
    const filteredList = list.filter(item => {
      return item.name !== name
    })
    setList(filteredList)
  }

  if (list.length === 0) {

  }


  return (
    <div className="App">

      <AddFoodForm setFood={handleAddFood} />
      <Search handleSearch={handleSearch} input={input} />

      <div>
        <h1>Food List</h1>
        {list.length !== 0 ? list.map((food) => {
          return (<div key={food.name}>
            <FoodBox
              food={food}
              deleteItem={deleteItem}
            />
          </div>)
        }) : <h4>No item</h4>}
      </div>
    </div>
  );
}

export default App;
