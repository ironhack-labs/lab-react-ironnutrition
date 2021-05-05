import React from "react";
import FoodBox from "./FoodBox";
import foods from "../foods.json";
import Form from "../Components/Form";

const foodList = [...foods]

class FoodList extends React.Component {

state = { foods: foodList }

addFood = (food)=>{
  const arrayCopy = [...this.state.foods];
  arrayCopy.push(food);
  this.setState({foods: arrayCopy});
}


displayFoodBox = () =>{
  return this.state.foods.map((food)=>{
    return(
      <FoodBox {...food} key={food.name} />
    )
  })
}

render(){
  return (
    <div>
      <Form addFood={(food) => this.addFood(food)} />
      <button onClick={() => this.addFood()}>Add Meal</button>
      <div className="food-container">
        {this.displayFoodBox()}
      </div>
    </div>
  );
}


}

export default FoodList;
