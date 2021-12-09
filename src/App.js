import React from 'react';
import FoodBox from './components/FoodBox'
import foods from './foods.json'





function App() {
  return (
    <>

    {foods.map((e)=>{
      return(
        <FoodBox
          name={e.name}
          calories={e.calories}
          image={e.image}
          quantity={e.quantity}
         />

      )
      

    })}
      
    


    </>
  );
}

export default App;
