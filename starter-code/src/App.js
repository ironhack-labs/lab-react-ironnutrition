import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import './App.css';
import FoodBox from './foodBox/foodBox';


class App extends Component {
  constructor() {
    super()
    this.foods = [...foods]
    this.state = {
      initialFood: this.foods,
      toggleForm: false,
      name: "",
      calories: 0,
      image: ""
      }
    }
  

  toggleForm=()=> {
    this.setState({
      ...this.state,
      toggleForm: true

    })
  }

  updateFood = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value}); 
  }

  // updateFood(e, key) {
  //   e.preventDefault();
  //   let updateFood = {...updateFood}
  //   updateFood[key] = e.target.value;
  //   this.setState({
  //     ...this.state,
  //     currentFood: updateFood

  //   })
  // }

  addFood=(e) =>{
    e.preventDefault();
    let addedFood = [...this.state.initialFood]
    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: 0
    }
    addedFood.unshift(newFood)
    this.setState({
      ...this.state,
      initialFood: addedFood
    })
    console.log("Hola weey :)")
  }


  render() {
    return (
      <div className="App">
        {this.state.toggleForm === true && <div>
          <form>
            <label>Name:</label>
            <input type="text" name="name" onChange={e => {
              this.updateFood(e)
            }} />

            <label>Calories:</label>
            <input type="text" name="calories" onChange={e => {
              this.updateFood(e)
            }} />

            <label>Image:</label>
            <input type="text" name="image" onChange={e => {
              this.updateFood(e)
            }} />
            <button onClick={e => this.addFood(e)}>Save Food</button>
          </form>
        </div>}

        <button onClick={() => this.toggleForm()}>Sonia Rocks</button>
        {this.state.initialFood.map((initialFood, idx) =>
          <FoodBox key={idx} name={initialFood.name} calories={initialFood.calories} image={initialFood.image} quantity={initialFood.quantity}></FoodBox>
        )}

      </div>
    );
  }
}

export default App;
