import './App.css';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// or import it this way
import {Paper, Grid} from '@material-ui/core';
import FoodBox from './components/FoodBox';
import Total from './components/Total';
import React, { Component } from 'react'
import foodsJson from './foods.json';
import Search from './components/Search';



class App extends Component {


  state = {
    foods: foodsJson,
    filteredFoods: foodsJson,
    total: []
  
  }


  handleAddTotal = (event, food) => {
    // Preveneting the default behaviour of forms
    // since the make a GET request with query 
    event.preventDefault()
    console.log('I am hungry!')
    console.log(event.target.quantity.value)
    console.log(food)

    let foodObj = {
      name: food.name,
      calories: food.calories,
      quantity: Number(event.target.quantity.value)
    }

this.setState({
  total: [foodObj, ...this.state.total]
})
  }
  
handleAddNewFood = (newFood) => {
this.setState({
  foods: [newFood,...this.state.foods]
})
  }


handleSearch = (event) => {
  let searchedFood = event.target.value
  const {foods} = this.state
  let filteredFoods = foods.filter((food)=>{
    return food.name.toLowerCase().includes(searchedFood.toLowerCase())
  }) 

  this.setState({
    filteredFoods: filteredFoods
  })

}

  
  render() {
    return (
      <div>
        Eat My App
        <img src="https://i.imgur.com/eTmWoAN.png" alt = 'food'/>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper >
              <Search onSearch={this.handleSearch} />
                <FoodBox foods={this.state.filteredFoods} 
                handleAddTotal={this.handleAddTotal}
                onAddNewFood={this.handleAddNewFood}
                />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper >
              <Total foods={this.state.total}/>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}


export default App;

// class App extends Component {
//   render() { something, somehting } = this.props
//   return (
//     <div className="App">
//       {foodsJson.map((food, i)=> {
//         return <FoodBox food={food} key={i}/>
//       })}
//       </div>
      
//   );
// };


// }