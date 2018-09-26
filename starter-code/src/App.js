import React, { Component } from "react";
import "./App.css";
import FoodList from "./Foodlist";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import NewFood from "./NewFood";
import FoodBox from './Foodbox';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foodList: foods.slice(),
      showForm: true

  }
  }

  showFoods = () => {
    return this.state.foodList.map((eachFood, index)=> {
      return <FoodBox key={eachFood.name} { ...eachFood }/>
    })
  }

  addNewFood = (e, theNewFood) => {
    e.preventDefault();

    const newFood = {
     name: theNewFood.nameField,
      calories: theNewFood.caloriesField,
      image: theNewFood.imageField,
    };

    const allTheFoods = [...this.state.foodList];


    allTheFoods.unshift(newFood);

    this.setState({foodList: allTheFoods })

  }



  render() {
    return(
      <div>
      <div className="title">Add A New Food</div>
      <form>
      
    <NewFood addnew = {this.addNewFood} />
      

      </form>

      <div className="list">

    {this.showFoods()}
    </div> 
      </div>
      )
  }
}

export default App;
