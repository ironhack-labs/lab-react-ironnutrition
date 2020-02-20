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
    filteredArray:[...food],
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
  }

  addElement = e =>{
    console.log(e);
  }

  search = e =>{
    const {name, value} = e.target;
    this.setState({[name]: value});
    this.setState({filteredArray:[...this.state.food.filter(food => food.name.toLowerCase().startsWith(value.toLowerCase()))]})
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
    const {form: {name, calories, image,counter, addElement}} = this.state;
    return (
      <div className="App">
        <SearchBarComponent
          search = {this.search}
        />

        <InputComponent
            name= {name}
            calories={calories}
            image={image}
            addFood={this.addFood}
            handleInputs = {this.handleInputs}
        />

        {
          this.state.filteredArray.map((food, index) => (
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
