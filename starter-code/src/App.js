import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import food from "./foods.json"
import FoodBox from "./FoodBox"



class App extends Component {

  state = {
    food: food,
    form: false,
    formFood: {
      name: "",
      calories: "",
      image: ""
    }

  }


  toggleForm = () => {
    this.setState({
      form: !this.state.form
    })
  }

  addDish = (e) => {
  e.preventDefault();
  
  let foodCopy = [...this.state.food]
  foodCopy.push(this.state.formFood)

  this.setState({
    food: foodCopy,
    formFood: {
      name: "",
      calories: "",
      image: ""
    }
  })

  this.toggleForm()

  }

  userInput = (e) => {
  let {name, value} = e.target
  let formFood = this.state.formFood
  formFood[name] = value

  this.setState({formFood})
  }

  searchHandler = (e) => { 
    let filtered = [...food].filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))

    this.setState({
      food: filtered
    })

  }

   render(){

    const formElement = <form onSubmit={(e) => this.addDish(e)}>
                        <label htmlFor="name">Name:</label><input name="name" onChange={(e) => this.userInput(e)}></input>
                        <label htmlFor="calories">Calories:</label><input name="calories" onChange={(e) => this.userInput(e)}></input>
                        <label htmlFor="image">Image:</label><input name="image" onChange={(e) => this.userInput(e)}></input>
                        <button type="submit">confirm</button>
                       </form>

  
    return <div>
    Search: <input onChange={(e) => this.searchHandler(e)}></input>  <br />
    <br />
    <button onClick={() => {this.toggleForm()}}>Add dish</button>
    <br />
    {this.state.form ? formElement : ""}
    <br />
    {this.state.food.map((el,idx) => {return <FoodBox {...el} key={idx}/>})}
    </div>
    
   }
}

export default App;
