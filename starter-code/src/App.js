import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox';
import Form from './Form';
import Search from './Search';

class App extends Component {

  constructor() {
    super()
    this.state = {
      foods: foods,
      open: false,
      name: "",
      calories: "",
      image: "",
    }



  }


  handleChange(e) {
    console.log(e.target.value)
    // Variable to hold the original version of the list
    let foodsCopie = [...this.state.foods];
    console.log(this.state.foods)
    // Variable to hold the filtered list before putting into state
    let newList = [...this.state.foods];
    // If the search bar isn't empty
    if (e.target.value !== "") {
        newList = foodsCopie.filter(foods => {
            const lc = foods.toLowerCase();
            const filter = e.target.value.toLowerCase();

            return lc.includes(filter);
        });
        console.log(newList)
    } else {
        newList = this.state.foods;
    }

    this.setState({
        filtered: newList
    });
  }
  
  switchMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  updateForm(e, field) {
    this.setState({
      ...this.state,
      [field]: e.target.value
    });
  }

  addFood = theFood => {
    const foodsCopie = [...this.state.foods]
    console.log(theFood)
    foodsCopie.push(theFood)
    this.setState({ foods: foodsCopie })
  }



  render() {
    return (


      <div className="App">
        


        <Search></Search>
        <button onClick={() => this.switchMenu()}>{this.state.open ? "Ocultar Añadir" : "Añadir Nuevo"}</button>
        {this.state.open && (
          <Form 
            addFood={(theFood) => this.addFood(theFood)}
            />
        )}
        {this.state.foods.map((food, idx) => (

          <FoodBox
            key={idx}
            name={food.name}
            calories={food.calories}
            image={food.image}
          />

        ))}
      </div>
    );
  }
}

export default App;
