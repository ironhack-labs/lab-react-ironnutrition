import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './FoodBox'
import Input from './Input'

class App extends Component {

  state = {
    foodList: foods,
    showForm:false  
  }


  showListOfFoods=()=>{
    return this.state.foodList.map(eachFood=> {
      return(
        <FoodBox image={eachFood.image}name={eachFood.name}calories={eachFood.calories}/>
      )
    })
  }
  
  
      
 
onChange = updatedValue =>{
  this.setState({
    fields:{
      ...this.state.fields,
      ...updatedValue
    }
  })
}
handleSubmit = ()=>{
  let copy = [...this.state.foodList];
  copy.push({
    name:document.querySelector("#name").value,
    calories: document.querySelector("#calories").value,
    image:document.querySelector("#image").value,
    quantity:0
  })
  this.setState({
    foodList:copy
  })

}
  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>

        <button>ADD A NEW FOOD</button>
        {/* <Form onChange={fields=>this.onChange(fields)}/> */}
        <form>
          <Input id="name" type="text" placeholder="name" name="name" />
          <Input id="calories" type="text" placeholder="calories" name="calories"  />
          <Input  id="image"  type="text" placeholder="image" name="image" />
          <button type="reset"onClick={this.handleSubmit}></button>
        </form>
     
        {this.showListOfFoods()}

      </div>
    );
  }
}

export default App;
