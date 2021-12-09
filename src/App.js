
import 'bulma/css/bulma.css';
import React from 'react';
import Foods from './foods.json';
import FoodBox from './components/FoodBox';
import Form from './components/Form'

import './App.css';

function App() {
  return (
  <>

      <Form />
      {Foods.map((elem)=>{
      return(
        <FoodBox
          name={elem.name}
          calories={elem.calories}
          image={elem.image}
          quantity={elem.quantity}
         />
      )
      })}
   
  </>
)}

export default App;
