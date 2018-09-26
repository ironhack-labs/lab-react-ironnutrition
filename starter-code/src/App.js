import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox.js'
import AddFood from './AddFood.js'

class App extends Component {






  constructor(props){
    super(props)
    this.state = {
      foods: foods, 
      foodNameInput: "",
      caloriesInput: "",
    }
  }



  showMovieCards(){
    return this.state.foods.map((food, index)=>{
      return (
          <FoodBox 
          key={ index }
          pictureUrl={food.image}
          name={food.name}
          calories={food.calories}
          quantity = {food.quantity}

          />
    
       )
    })
  }





  render() {
    return (


      <div className="App">

  <h1 className="title">IronNutrition</h1>

      <div>
        <input type="text" className="input search-bar" name="search" placeholder="Search" value=""/>
      </div>



{/* <FoodBox /> */}
{/* <button onClick={()=> this.addNewFood()}>Add new food</button> */}

<AddFood addNew = {this.addNewFood} />
 {this.showMovieCards()}


 </div>
    );
  }
}

export default App;
