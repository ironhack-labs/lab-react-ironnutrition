import React    from 'react';
import foods    from './foods.json';
import FoodList from './components/FoodList';
import AddFood  from './components/AddFood';
import Search   from './components/Search';
import Calories from  './components/Calories';
import 'bulma/css/bulma.css';
import './App.css';

class App extends React.Component {

  state = {
    foods: foods,
    filteredFoods: foods,
    addShows: false,
    todaysFoods: [],
    total: 0,
  }

  handleAdd = (e) => {
    e.preventDefault();
    let name = e.currentTarget.name.value;
    let calories = e.currentTarget.calories.value;
    let image = e.currentTarget.image.value;
    this.setState({
      foods: [{name: name, calories: calories, image, quantity: 0}, ...this.state.foods],
      filteredFoods: [{name: name, calories: calories, image, quantity: 0}, ...this.state.foods],
      addShows: false,
    })
  }

  handleAddBtn = () => {
    this.setState({
      addShows: !this.state.addShows
    })
  }

  handleSearch = (e) => {
    let searchFood = e.currentTarget.value;
    let foodsFilter = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(searchFood.toLowerCase())
    })

    this.setState({
      filteredFoods: foodsFilter
    })
  }

  handleCalories = (id, quantity) => {
    let newFood = this.state.filteredFoods[id]
    let newQuantity = Number(quantity);
    let itemTotal = newQuantity * newFood.calories;
    let newTotal = this.state.total + itemTotal;

    // Clones todaysFoods-array (including current quantity)
    let cloneToday = [...this.state.todaysFoods]

    // Add the old quantity of food to the new quantity
    cloneToday.forEach((food) => {
      return food.name === newFood.name ? newQuantity += food.quantity : null
    })

    // Sets new quantity to the food-item
    newFood.quantity = newQuantity

    this.setState({
      // Makes a new array without duplicates
      todaysFoods: [...new Set([newFood, ...this.state.todaysFoods])],
      total: newTotal
    })
  }

  handleDelete = (id, itemTotal) => {
    let cloneToday = [...this.state.todaysFoods];
    cloneToday.splice(id, 1);
    let newTotal = this.state.total - itemTotal;

    this.setState({
      todaysFoods: cloneToday,
      total: newTotal
    })
  }

  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <h1 className="title">IronNutrition</h1>
          </div>
        </section>

        <Search onSearch={this.handleSearch}/>
        <button className="button is-link" onClick={this.handleAddBtn}>Add a new food</button>
        {this.state.addShows && 
          <AddFood 
            onAdd={this.handleAdd} 
            onAddBtn={this.handleAddBtn} 
          />
        }
        <div className="main">
          <FoodList 
            foods={this.state.filteredFoods}
            addCalories={this.handleCalories}
          />
          <Calories 
            todaysFoods={this.state.todaysFoods}
            total={this.state.total}
            onDelete={this.handleDelete}
          />
        </div>
      </div>
    )
  }
}

export default App;
