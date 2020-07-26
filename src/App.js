import React, { useState } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFood from './components/AddFood';


function App() {


  const [foodList, setFoodList] = useState(foods)
  const [todayFood, setTodayFood] = useState([])
  const [totalCal, settotalCal] = useState(0)

  let listaFoods = foodList.map(food => {
    return <FoodBox key={food.name} food={food} addTodayFood={(e) => addTodayFood(e, food)} handleChange={(e) => handleChange(e,food.name)} />
  })
  let listaTodayFoods = todayFood.map(food => {
    let cal= food.quantity *food.calories
    return (<div>
      {food.quantity} {food.name} = {cal}
    </div>)
  })


  const searchBar = (e) => {
    let filtro = e.target.value
    let copi = [...foodList]

    setFoodList(copi = copi.filter(food => {
      return food.name.toLowerCase().includes(filtro)
    }))
  }



  const handleChange = (e, name) => {
    let copi = [...foodList]
    
    for(let i=0; i<copi.length; i++){
      if (name === copi[i].name){
        copi[i].quantity= e.target.value;
      }
    }
    setFoodList(copi)
  }

  const addTodayFood = (e, food) => {
    let copi = [...todayFood];
    copi.push(food);
    setTodayFood(copi);
    let total =0;
    for (let i=0; i< copi.length; ++i){
      total+= copi[i].calories * copi[i].quantity;
    }
    settotalCal(total);
  }

  return (
    <div className="App">
      <input type="text" name="seach" onChange={searchBar} />
      <div className="columns">
        <div className="column is-two-thirds">
          {listaFoods}
        </div>
        <div className="column">
          <h2>Today list </h2>
          {listaTodayFoods}
          <br></br>

          {totalCal}
        </div>
      </div>

      <AddFood foods={foodList} modifFoodList={setFoodList} />
    </div>
  );
}

export default App;
