import React from 'react';
import foods from './foods.json';
import Food from './components/Food';
import Formulario from './components/Formulario';

function App() {
  return (
    <>
    <div style={{display:'flex'}}>

      <Food datos={foods}/>
      <Formulario allFoods={foods}/>
    </div>
    
    </>
  );
}

export default App;
