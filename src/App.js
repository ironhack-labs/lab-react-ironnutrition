import React, {Component} from 'react';
import 'bulma/css/bulma.css'
import './App.css'
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddNewForm from './components/AddNewForm'
import Search from './components/Search'
import Today from './components/Today'

class App extends Component {
  state = {
    ingredients: foods,
    filteredIngredients: foods,
    today: [],
    showForm: false
  }
  addIngredient = (e)=>{
    e.preventDefault()
    this.setState({
      ingredients: [{name: e.target.name.value, calories: e.target.calories.value, image: e.target.image.value, quantity: 0}, ...this.state.ingredients],
      filteredIngredients: [{name: e.target.name.value, calories: e.target.calories.value, image: e.target.image.value, quantity: 0}, ...this.state.ingredients]
    })
  }
  handleFilter = (e)=>{
    let str = e.target.value.toLowerCase()
    this.setState({
      filteredIngredients: this.state.ingredients.filter(e=>e.name.toLowerCase().includes(str))
    })
  }
  addToToday = (e, food)=>{
    e.preventDefault()
    food.quantity = e.target.quantity.value
    console.log(food)
    this.setState({
      today: [...this.state.today, food]
    })

  }
  render(){
    console.log('new render')
    return (
      <div>
        <button className="button is-info" onClick={()=>{this.setState({showForm: !this.state.showForm})}}>Add new food</button>
        { this.state.showForm && <AddNewForm callback={this.addIngredient}/>}
        <br/>
        <Search onChange={this.handleFilter}/>
        <div className="two-columns">
          <div>
      {
        this.state.filteredIngredients.map( (food,index)=> <FoodBox key={index} ingredient={food} onSubmit={this.addToToday}/>)
      }
          </div>
          <div>
            <Today foods={this.state.today}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
