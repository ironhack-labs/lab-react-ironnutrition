import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import AddForm from './components/AddForm';

 class App extends Component{

  state = {
    foods: foods,
    showingForm: false,
    filteredFoods: foods,
    //boolean
  };

handleAddForm = (event) => {
event.preventDefault();          //stops the brownser from reloading  
let name = event.target.name.value  //now we have the info typed into the name input
let calories = event.target.calories.value  //now we hold the info and we wanna put it on the same list we already have
//manipulating whatever you have inside of state:
this.setState({
foods: [...this.state.foods, {name: name, calories: calories}],
showingForm: !this.state.showingForm

})
}

handleButton = () => {
this.setState({
  showingForm: !this.state.showingForm 
})}

handleFilter = (event) => {

  let input = event.target.value
  let newFoods = this.state.foods.filter((food) => {
    //any input letter = includes
    return food.name.includes(input)
  })
  this.setState({
    filteredFoods: newFoods

  })

}

  //Line: 44 if is true, botton changes to true else will show the form (if you dont want the button to show, show the form.. )
  //sset the state of the boolean false
  render () {
    return (

      <div>
    <button onClick={this.handleButton}>Add</button>
    {this.state.showingForm && <AddForm onAddForm={this.handleAddForm}/>}
  {/* /*{!this.state.showingForm ? <button onClick={() => {this.setState ({showingForm:true})}}>Add</button> : <AddForm  onAddForm={this.handleAddForm} /> }*/}
     <input type="text" onChange={this.handleFilter} ></input>
    {this.state.filteredFoods.map((food) => {
      return (
        <div className="App">
        <FoodBox 
        name={food.name}
        calories={food.calories}
        image={food.image}
        quantity={food.quantity}
         />
         </div>
      );
    })}
    
    </div>
    )}
}

export default App;
