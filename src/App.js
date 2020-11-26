import React from 'react';
import './App.css';
import FoodBox from './Components/FoodBox'
import 'bulma/css/bulma.css';
import foods from './foods.json';
import {useState} from 'react'
import FormAdd from './Components/Form';
import Search from './Components/Search'

function App() {
  const [form, setForm] = useState(false)
  const [foodie, setFood]=useState(foods)



  function addNewFood(food) {
    setFood([...foodie, food])
    
  }
  function searchFood(value){
    let listFood=[...foodie]
     setFood( listFood.filter(word=> word.name === value.search))
    
  }

  return (
    <div className="App">
  <div style={{display:'flex', flexDirection:'row' }}> 
  <div>
  <div>
    <div> 
      <button onClick={()=>setForm(!form)}> Add food</button>
    </div>
      {form && <FormAdd addNewFood={addNewFood} setForm={setForm} />}
    </div>  
      <div>
      <Search searchFood={searchFood}/>
    </div>
      {foodie.map(foods => <FoodBox {...foods}/>)}
  </div>
      <div style={{marginLeft:'200px', marginTop:'100px', fontSize:'50px'}}>
        <h1 > Today´s food </h1>
      </div>
 </div>     
  </div>
  );
}

export default App;
