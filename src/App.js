import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox'
import 'bulma/css/bulma.css';
import foodList from './foods.json';
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';



function App() {
  const [foodState, setFoodState] = useState(foodList);
  const [formState, setFormState] = useState(false);
  const [foodSearch, setFoodSearch] = useState([])

  const handleForm =() => {
    setFormState(!formState)
  }

  const addFood = (newFood) => {
    let foodStateCopy = [...foodState]
    const added = [...foodStateCopy, newFood]
    setFoodState(added)
  }

  const foodFilter = (value) => {
    
    const filteredFood = foodState.filter((item) => item.name.toLowerCase().includes(value.toLowerCase()));
    setFoodSearch(filteredFood);
  }

  return (
    <div className='AppDiv'>
      <button onClick={handleForm} className='addButton'>Add new food!</button>
      {formState && <FoodForm handleForm={handleForm} addFood={addFood}/>}
      <SearchBar foodFilter={foodFilter} />
      {(foodSearch.length === 0 ? foodState : foodSearch).map((foodObject) => (
        <FoodBox foodObject={foodObject}/>
      ))}
    </div>
  );
}

export default App;
