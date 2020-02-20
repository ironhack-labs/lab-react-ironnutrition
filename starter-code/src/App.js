import React, { Component } from "react";
import "./App.css";
import food from './foods.json';
import FoodBox from "./Components/FoodBox";
import InputComponent from "./Components/FormComponent";
import SearchBarComponent from "./Components/SearchBarComponent";

class App extends Component {

  state={
    form:{
      name:'',
      calories:'',
      image:''
    },
    searchInput: '',
    food,
    filteredArray:[],
    counter: '0',
  }

  handleInputs =(e)=>{
    const {name, value} = e.target;
    this.setState(prevState => {
      return{ 
        ...prevState, 
       form:{
         ...prevState.form,
         [name]: value
       }
      }
     })

     console.log(name,value)
  }

  addElement = e =>{
    console.log(e);
  }

  arrayFilter = e =>{
    
  }

  addFood = (e) => {
    e.preventDefault() ;
    const {form:{name, calories, image}} =  this.state;
    this.setState(prevState=> {
      return{
        ...prevState,
        food: [...food, {name,calories,image} ]
      }
    })
  }

  render() {
    const {form: {name, calories, image,counter, addElement, searchInput}} = this.state;
    return (
      <div className="App">
        <SearchBarComponent
          searchInput={searchInput}
          arrayFilter = {this.arrayFilter}
          handleInputs = {this.handleInputs}
        />

        <InputComponent
            name= {name}
            calories={calories}
            image={image}
            addFood={this.addFood}
            handleInputs = {this.handleInputs}
        />

        {
          this.state.food.map((food, index) => (
            <FoodBox
              name= {food.name}
              calories = {food.calories}
              image= {food.image}
              key = {index}
              counter={counter}
              addElement={addElement}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
