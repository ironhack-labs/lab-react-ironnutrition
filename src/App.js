import React from 'react';
import './App.css';
import foodsList from './foods.json';
import FoodBox from './components/FoodBox/FoodBox'
import NewFood from './components/NewFood/NewFood';

let formDisplay = false

class App extends React.Component {
    state= {
      foods:foodsList,
      
    }

   displayFoods = ()=>{
    return (
      this.state.foods.map((food)=>{
        return <FoodBox key={`${food.name}`} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity}/>
      })
    )
  }
   handleFormDisplay =()=>{
    return formDisplay=!formDisplay,
    console.log(formDisplay)
  } 
  addFood = (food) =>{
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(food)
   
    this.setState ({
      ...this.state,
      foods:foodsCopy
    })
  }
  searchFood =(food)=>{
    console.log('food',food.target.value)

    const matchFood= this.state.foods.filter((match)=>match.name.toLowerCase().includes(food.target.value.toLowerCase()))
    console.log('matchfood',matchFood)
    this.setState({
      ...this.state,
      foods:matchFood
    })
  }
 
  render(){
  return (
    <div className="App">
    <form><input type="text" onKeyUp ={(e)=>this.searchFood(e)} /></form>
    <div>{this.displayFoods()}</div>
    <button onClick={this.handleFormDisplay}>Añadir comida </button>
    <div><NewFood addFood={this.addFood}/></div>
      
    </div>
  );
 }
}

export default App;
