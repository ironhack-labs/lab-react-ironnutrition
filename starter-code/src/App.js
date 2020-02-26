import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox/FoodBox';
import Form from './Form/Form'
import Search from './Search/Search';


class App extends Component {

  state = {
    foodOriginal : foods,
    foods: foods,
    open: false
  }

  switchMenu() {
    this.setState({
      open: !this.state.open
    });
  }

  addFoodFunction = theFood => {
    const foodsCopie = [...this.state.foods]
    // console.log(theFood)
    foodsCopie.push(theFood)
    this.setState({ foodOriginal: foodsCopie })
    this.setState({ foods: foodsCopie })
  }

  searchFood = value => {
    const foodsCopie = [...this.state.foods]
    const foodsOriginal = [...this.state.foodOriginal]
    let newList = []
    console.log(value)
  
      newList = foodsOriginal.filter(item => {
        // const lc = item.name.toLowerCase();
        // const filter = value.toLowerCase();
        const lc = item.name
        console.log(lc)
        const filter = value;
        return lc.includes(filter);
      })
    
    console.log(newList) 
      this.setState({ foods: newList })
    }


  render() {
      return(
      <div className = "App" >
          <button onClick={() => this.switchMenu()}>{this.state.open ? "Ocultar Añadir" : "Añadir Nuevo"}</button>
        
        { this.state.open && (
        <Form
          addFood={(theFood) => this.addFoodFunction(theFood)}
        />
      )
    }
    < Search searchFood = {(value) => this.searchFood(value)}></Search >
      { this.state.foods.map(food => <FoodBox image={food.image} name={food.name} calories={food.calories}></FoodBox>) }
      </div >

    );
  }
}

export default App;
