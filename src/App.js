import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foodsList from './foods.json';
import FoodBox from "./components/FoodBox"
import FoodTable from "./components/FoodTable"

class App extends Component {
  state={
    foods: foodsList
  }

  addForm = () => {
    const moreFood = [...this.state.foods]
    const form = foods
      if()
    
  this.setState({
    foods:moreFood
  })
  
  }

  render(){
    return (
   <div className="App">
        <h1>FOOD</h1>
        <button onClick={()=>this.addForm()} >ADD YOUR FOOD</button>
        <FoodTable />
        <input type="text" className="input" placeholder="Search..." />
    <ul>
    ...
    </ul>
        {this.state.foods.map((food, index)=>{
          return(
            <FoodBox
            key={index}
           food= {food}/>
          )
        })}
      </div>
    );
  }
   
  }

export default App;

