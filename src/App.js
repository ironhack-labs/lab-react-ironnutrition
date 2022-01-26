import React, {useState} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsList from './foods.json';
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';
import Search from './components/Search'


function App() {

  const [foods, setAddNewFood] = useState(foodsList);
  const [showForm, setShowForm] = useState(false);   //só fica true quando clicar no botão e for para aparecer o form
  const [filteredFoods, setFilteredFoods] = useState(foods);



  const pushNewFood = ((newFood) => {setAddNewFood([...foods, newFood]);
    newFood.quantity = 0;  //quantidade inicial da nova comida add
    setShowForm(false);
 })


  const filterFood = (input) => {
    const filtered = foods.filter((food) => food.name.toLowerCase().includes(input.toLowerCase()));
    setFilteredFoods(filtered);
  }



  
  return (
    <>
      <Search filterFood={filterFood}/>
      <button onClick={(e)=> {setShowForm(!showForm)}}>{showForm? 'Close' : 'Add New Food'}</button>
      {showForm && <FoodForm pushNewFood={pushNewFood}/>}     
      {filteredFoods.map((food) => <FoodBox key={food.name} {...food}/>)}
    </>
  );
}

export default App;
