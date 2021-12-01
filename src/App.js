import React from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './Components/FoodBox/FoodBox';
import AddFood from './Components/AddFood/AddFood';

class App extends React.Component {

  constructor(){
    super()

    this.state = {
      isPressed: false,
      food: foods
    }
  }

  buttonChange() {
    console.log(this.state.isPressed)
    if (this.state.isPressed === true) {
      this.setState({
        isPressed: false
      })} else {
        this.setState({
          isPressed: true
        })}
  }

  addNewFood = (food) => {
    let copyFood = [...this.state.food]
    copyFood.push(food)

    this.setState({
      food: copyFood
    })
  }

  render(){
    return (
      <>
        <div className="cards-container">
          {this.state.food.map((food, i) => 
            
            <FoodBox key={i} thisFood={food}></FoodBox>

          )}

          <button onClick={() => {this.buttonChange()}}>Add new food</button>
          
          {this.state.isPressed ? <AddFood addNewFood={this.addNewFood} /> : null}
        </div>
      </>
    );  
  }
}

export default App;
