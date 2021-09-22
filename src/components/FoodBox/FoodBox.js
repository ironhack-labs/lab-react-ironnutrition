import React from 'react'
import foodsList from './../../foods.json';
import FoodItem from '../FoodItem/FoodItem';
import AddNewFood from '../AddNewFood/AddNewFood';
import Search from '../Search/Search';

class FoodBox extends React.Component {
  state = {
    foods: foodsList,
    displayForm: false
  }

  displayFoods = () => {
    return this.state.foods.map((food, idx) => {
      return (
        <FoodItem key={`${idx}-${food.name}`} {...food} />
      )
    })
  }

  addNewFood = (food) => {
    const foodsCopy = [...this.state.foods];
    foodsCopy.push(food);

    this.setState({
      ...this.state,
      foods: foodsCopy
    }, /* ()=> {
      this.toggleAddNewFoodForm(false)
    } */ ) // Para tenerlo guardado
  }

  toggleAddNewFoodForm = (bool) => {

    this.setState({
      ...this.state,
      displayForm: bool
    })
  }

  filterFoodsBySearch = (value) => {

    this.setState({
      ...this.state,
      foods: foodsList.filter(food => food.name.toLowerCase().includes(value.toLowerCase()))
    })
  }

  render() {
    return (
      <div className="box">
        <button onClick={() => this.toggleAddNewFoodForm(true)}>Add New Food</button>
        {this.state.displayForm && <AddNewFood toggleAddNewFoodForm={this.toggleAddNewFoodForm} addNewFood={this.addNewFood} />}

        <Search filterFoodsBySearch={this.filterFoodsBySearch} />

        {
          this.displayFoods()
        }
      </div>
    )
  }
}


export default FoodBox;
