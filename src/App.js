import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import foodList from './foods.json';


class App extends React.Component {
  state = {
    foodList,
    foodName: "",
    foodCalories: "",
    foodImage: "",
    isFormDisplayed: false,
    todayFood: []
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnClick = () => {
    this.setState({
      isFormDisplayed: !this.state.isFormDisplayed
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { foodName, foodCalories, foodImage } = this.state;
    const newFoodArray = [{name: foodName, calories: foodCalories, image: foodImage}, ...foodList];
    this.setState({
      foodList: newFoodArray,
      foodName: "",
      foodCalories: "",
      foodImage: "",
      searchParams: "",
      isFormDisplayed: false
    })
  }

  addQuantity = (foodObject) => {
    let todayFood = [...this.state.todayFood, foodObject];
    this.setState({
      todayFood
    })
  }

  render() {
    const totalCalories = this.state.todayFood.reduce((acc, ele) => acc + ele.calories, 0);
    return (
      <div className="App">
        
        <button onClick={this.handleOnClick}> Add food </button>
        
        { this.state.isFormDisplayed && 

          <form onSubmit={this.handleSubmit}>
            <label> Name </label>
            <input name="foodName" placeholder="Lasagna" value={this.state.foodName} onChange={this.handleOnChange}></input>
            <label> Calories </label>
            <input name="foodCalories" placeholder="23 calories" value={this.state.foodCalories} onChange={this.handleOnChange}></input>
            <label> Image </label>
            <input name="foodImage" placeholder="image URL" value={this.state.foodImage} onChange={this.handleOnChange}></input>
            <button> Create food </button>
          </form>

        }
        
        <div className="field">
          <div className="control">
            <input className="input is-primary" type="text" placeholder="Pizza" name="searchParams" value={this.state.searchParams} onChange={this.handleOnChange}/>
          </div>
        </div>
        
        <div className="food-container">
          <div>
            {this.state.foodList.filter(element => element.name.includes(this.state.searchParams)).map((element, idx) => <FoodBox key={idx} food={element} addQuantity={this.addQuantity} />)}
          </div>
          
          <div>
            <h1>Today's food</h1>
            <ul>
              {this.state.todayFood.map((element, index) => {
                return(
                  <li key={index}>
                    {element.quantity} {element.name} = {element.calories} Cal
                  </li>
                )
              
              })}
              <p>
                Total: {totalCalories} calories
              </p>
            </ul>
          </div>
        
        </div>
      </div>
    );
   }
}

export default App;
