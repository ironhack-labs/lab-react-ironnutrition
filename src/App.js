import React from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddButton from './components/AddButton'
import 'bulma/css/bulma.css'
import AddForm from './components/AddForm'
import Search from './components/Search'
import TodayList from './components/TodayList'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      foods: foods,
      filteredFoods: foods,
      todayFoods:[],
      displayForm: false
    }
  }

  toggleForm=()=>{
    let formState = this.state.displayForm
    formState = !formState
    this.setState({displayForm: formState})
  }

  addFood=(event)=>{
    event.preventDefault();
    let newFood = {name: event.currentTarget.name.value, calories: event.currentTarget.calories.value, image: event.currentTarget.image.value}
    this.setState({foods: [...this.state.foods, newFood], filteredFoods: [...this.state.foods, newFood]})
  }

  searchFood=(event)=>{
    let greatMatches = this.state.foods.filter((food)=>{return food.name.toLowerCase().startsWith(event.currentTarget.value.toLowerCase())})
    let regularMatches = this.state.foods.filter((food)=>{return food.name.toLowerCase().includes(event.currentTarget.value.toLowerCase()) && !greatMatches.includes(food)})
    this.setState({filteredFoods: [...greatMatches, ...regularMatches]})
  }

  addToday=(food)=>{
    let newToday = {name: food.name, calories: food.calories, quantity: food.quantity}
    this.setState({todayFoods: [...this.state.todayFoods, newToday]})
  }

  deleteToday=(id)=>{
    let cloneToday = [...this.state.todayFoods]
    cloneToday.splice(id, 1)
    this.setState({todayFoods: cloneToday})
  }
  

  render(){
    return (
      <div className="App">
        <AddButton toggleForm={this.toggleForm}/>
        {this.state.displayForm && <AddForm addFood={this.addFood}/>}
        <Search searchFood={this.searchFood}/>
        <div className="columns is-mobile">
          <div className="column">
            {this.state.filteredFoods.map((food, index)=>{
              return <FoodBox key={index} food={food} index={index} addToday={this.addToday}/>})}
          </div>
          {this.state.todayFoods.length>0 && <TodayList todayList={this.state.todayFoods} onDelete={this.deleteToday}/>}
        </div>
      </div>
    );
  }
}

export default App;
