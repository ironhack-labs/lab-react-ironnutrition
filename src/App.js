import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import Form from './components/Form/Form';
import Search from './components/Search/Search';
import FoodList from './components/FoodList/FoodList';

class App extends React.Component {

  state = {
    formOpen: false,
    foods: foods,
    foodToAdd: [],
  }

  showForm = () => {
    this.setState({
      ...this.state,
      formOpen: true,
    }) 
  }

  hideForm = () => {
    this.setState({
      ...this.state,
      formOpen: false
    })
  }

  addFood = (food) => {
    const foodCopy = [...foods]
    foodCopy.push(food)

    this.setState({
      ...this.state,
      foods: foodCopy
    })
  }

  searchFood = (text) => {
    const foodCopy = [...foods]
    const filteredFoods = foodCopy.filter((food) => food.name.toLowerCase().includes(text))
    this.setState({
      ...this.state,
      foods:filteredFoods
    })
  }

  showFood = (food) => {
    const todaysFood =  [...this.state.foodToAdd]
    todaysFood.push(food)
    
    this.setState({
      ...this.state,
      foodToAdd: todaysFood
    })
  }

  render () {
      return (
        <div className="App">

          <Search searchFood={this.searchFood} />

          <div className="app-container">

            <div className="foods-container">
                {this.state.foods.map((food) => {
                  return <FoodBox food={food} showFood={this.showFood} />
                })}
            </div>

            <div className="food-list">
              <FoodList food={this.state.foodToAdd} />
            </div>

          </div>
    
          <button onClick={()=>this.showForm()}>Add new food</button>

          {this.state.formOpen ? <Form addFood = {this.addFood} hideForm = {this.hideForm}/> : null }
          
        </div>
      )

  }
}

export default App;
