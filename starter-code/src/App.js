import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddNewForm from './components/AddNewForm'

class App extends Component {

  state = {
    foods: [],
    food: [],
    form: false
  }

  componentDidMount = () =>{
    this.setState({foods})
    this.setState({food:foods})
  }

  drawFoodBox = (elem, index) =>{
    return <FoodBox key={index} image={elem.image} name={elem.name} calories={elem.calories} addToday={this.addToday} />
  }


  addFood = (image, name, calories) => {
    let {foods} = this.state
    foods.push({image, calories, name})
    let food = [...foods]
    this.setState({food, foods})
    this.hideForm()
  }

  showForm = () =>{
    let form = true
    this.setState({form})
  }

  hideForm = () =>{
    let form = false
    this.setState({form})
  }

  drawForm = () =>{
    let {form} = this.state
    if(form === true){
      return (<AddNewForm addFood={this.addFood} hideForm={this.hideForm}/>)
    } else{
      return <button onClick={this.showForm} className="button is-info">Add new</button>
    }
  }

  searchTerm = e =>{
    let {foods} = this.state
    let searchterm = e.target.value
    let food = foods.filter((e, i)=> e.name.toLowerCase().includes(searchterm))
    this.setState({food})
  }


  render() {
    let {food} = this.state
    return (
      <div className="App">
        <h1> IronNutrition</h1>

        <div>
          <input onChange={this.searchTerm} type="text" className="input search-bar" name="search" placeholder="Search" defaultValue="" />
        </div>

        <div className="columns">
          <div className="column">
            {this.drawForm()}
            {food.map(this.drawFoodBox)}
          
          </div>
        
        
        </div>

      </div>
    );
  }
}

export default App;
