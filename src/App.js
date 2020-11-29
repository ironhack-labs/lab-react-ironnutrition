import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './FoodBox/FoodBox';
import AddFoodForm from './AddFoodForm/AddFoodForm'
import Search from './Search/Search'
// import TodaysList from './TodaysList/TodaysList';

//Klik + button ---> Voeg food toe aan lijst 'Todays food'
// bereken totale calorie nog

// function TodaysList(props){
//   const[todaysList, setTodaysList] = useState("");

 

//   return(
//     <div>
//       <h2>Today's foods</h2>
//       <ul>
//         {props.foodList.map((food, index) => {
//           return (
//             <li key={index}>
//               {`${food.quantity} ${food.name} = ${
//                 food.calories * food.quantity
//               } cal`}
//             </li>
//           );
//         })}
//       </ul>

//       <p>Total: {props.calories}</p>
//     </div>
//   );
// }
    

function App(){
  //state van app
  const [state, setState] = useState([...foods])

  return(
  <div className="App">
    <h1>IronNutrition</h1>
    <AddFoodForm foodList={state} setFoodList={setState}  />
    <Search appState = {state} setApp={setState} />

{/* hieronder geef je de waarden uit de huidige state door aan FoodBox component */}
  {state.map((item, index )=>(
    <FoodBox 
    index = {index}
    name = {item.name}
    calories = {item.calories}
    image = {item.image}
    quantity = {item.quantity}
    /> ))}
        <div>
{/* <TodaysList foodList={state} setFoodList={setState} /> */}
</div>
     </div>
  )} 

export default App;
