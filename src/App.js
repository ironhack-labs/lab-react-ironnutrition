import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foodsJson from './foods.json';
import FoodBox from './components/FoodBox'
import Search from './components/Search';
import Total from './components/Total';
import AddForm from './components/AddForm';

class App extends Component {
  //Iteration 2: In your App component (your main component), display as many FoodBox as elements inside the variable foods.
  state = {
    foods: foodsJson,
    filteredFoods: foodsJson,
    total: [],
    showForm: false
  }

  //For the iteration3: we need to create an HandleAddNewFood here and pass it as a prop to FoodBox.
  handleAddNewFood = (event) => {
    
    //the first thing that we need to do in an event is prevent the default behavior of forms:
    event.preventDefault();

    //newFood is coming from the form (it is an object like the objects that are in the foods.json file)
    let newFood = {
      name: event.target.name.value,
      calories: event.target.calories.value,
      image: event.target.image.value
    }
    console.log(newFood)
    //we need to set state to add the new food. For this, we use the spread operator because push method modifies the original array and we don't want that
    this.setState({
      foods: [newFood, ...this.state.foods],
      filteredFoods: [newFood, ...this.state.foods],
      showForm: false//after the user clicks on the submit button, we need to set the state of show form for false again (because we want to make the form disappear)
      //foods is equal the new food + all the other foods that are in the foods.json
    })

    console.log(this.state.filteredFoods)
  }

  handleClick = () => {
    this.setState({
        showForm: true
    })
  }

  handleSearchFood = (event) => {
    let searchedFood = event.target.value //this is what the user is typing in the search
    const {foods} = this.state 
    let filteredFoods = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedFood.toLowerCase())
    })

    this.setState({
      filteredFoods: filteredFoods
    })
  }

  handleAddTotal = (event, quantity, food) => {
    event.preventDefault()

    let foodObj = {
      name: food.name,
      calories: food.calories,
      quantity: quantity
    }



    this.setState({
      total: [foodObj, ...this.state.total]
    })
  }
  
  render() {
    const {filteredFoods} = this.state //we are picking the state object and destructuring to get the foods
    const {showForm} = this.state

    return (
      <div>
        <Search onSearchFood={this.handleSearchFood}/>
        <div className="columns">
          <div className="column">
          {
            showForm ? <AddForm onAddNewFood={this.handleAddNewFood} /> : <button onClick={this.handleClick} className="button is-white">Add a new food</button>
          }
          {
          //for the iteration2: we need to loop through all the foods that are in the foods.json. In order to organize the code, we destructured this.state that is outside the function and now we can use only "foods" when we want to refer the "this.state.foods"
          filteredFoods.map((singleFood, i) => {
            //console.log(singleFood, i)
            return <FoodBox
              key={i}    //this is to create an unique id for each FoodBox
              food={singleFood} //"food" is the key name for our props, and "singleFood" is each food object that is in the foods.json
              handleAddTotal={this.handleAddTotal}
            />
          })
        }
          </div>
          <div className="column">
            <Total foods={this.state.total}/>
          </div>
        </div>

      </div>
    )
  }
}

export default App;
