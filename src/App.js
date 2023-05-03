import './App.css';
import foods from "./foods.json";
import { useState }  from "react";
import FoodBox from "./components/FoodBox"
import { Row } from 'antd';


function App () {
  const [food, setFood] = useState(foods)
  

  return <div className="App">
  <h1>Food List</h1>

{/* Iteration 1:    
{ food.map(oneFood => {
    return (
      <div key={oneFood.name}>
        <p>{oneFood.name}</p>
        <img src={oneFood.image} alt={oneFood.name} width={100} />
      </div>
    )
  })} */}

{/*
zu Iteration 2:  
   <FoodBox food={ {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}} />  */}

{/* Iteration 3: rendering list */}
  <Row style={{ width: '100%', justifyContent: 'center' }}>
          { food.map(food => {
    return (
      <div>
        <FoodBox food={ {
            name: food.name,
            calories: food.calories,
            image: food.image,
            servings: food.servings,
        }}/>
      </div>
    )
  })} 
  </Row>


      
  </div>;
}


export default App;