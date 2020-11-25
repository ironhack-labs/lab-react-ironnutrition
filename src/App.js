import React, {useState} from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox'

// function FoodBox({foods: {name, calories, image, quantity}}){
//   return(
//   <div className="box">
//       <article className="media" style={{borderRadius:"3px", border:"1px grey solid"}}>
//           <div className="media-left">
//           <figure className="image is-64x64">
//               <img src={image} style={{height:"64px", width:"64px"}}/>
//           </figure>
//           </div>
//           <div className="media-content">
//           <div className="content">
//               <p>
//               <strong>{name}</strong> <br/>
//               <small>{calories} cal</small>
//               </p>
//           </div>
//           </div>
//           <div className="media-right">
//           <div className="field has-addons">
//               <div className="control">
//               <input className="input" type="number" value={quantity} />
//               </div>
//               <div className="control">
//               <button className="button is-info" style={{color: "white", backgroundColor:"blue", border:"none"}}>
//                   +
//               </button>
//               </div>
//           </div>
//           </div>
//       </article>
//   </div>
// )}

function FoodList(){
  const [food, setFood] = useState(foods)

  return (
    <div>
      {food.map(food => <FoodBox
        key={food.name}
        {...food}
      />)}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <FoodList/>
    </div>
  );
}

export default App;
