import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox';
import MyForm from "./MyForm";
import List from "./List";

class App extends Component {


  state={
    foods,
    moreFoods: foods
  }

    addTheFood(food){
      let newFood = [...this.state.foods]
      newFood.push(food)
      this.setState({
        foods:newFood,
        moreFoods: newFood
      })
    }

    search(e) {
      console.log(e.target.value);

      let currentList = [];
          
      let newList = [];
      if (e.target.value !== "") {
        
      currentList = this.state.moreFoods;

            
        newList = currentList.filter(food => {
                
          const lc = food.name.toLowerCase();
                
          const filter = e.target.value.toLowerCase();
                
          return lc.includes(filter);
        });
      } else {
              
        newList = this.state.moreFoods;
      }

      this.setState({
        foods: newList
      });
}


  render() {
    return (
      <div className="App">

      
      <List search={e => this.search(e)}></List>
      <MyForm addFood={(elm)=>{this.addTheFood(elm)}}></MyForm>
          {this.state.foods.map(food => (
            <FoodBox image={food.image} name={food.name} calories={food.calories} quantity={food.quantity}></FoodBox>
          ))}
        </div>
   )  
  
}

}
export default App;
