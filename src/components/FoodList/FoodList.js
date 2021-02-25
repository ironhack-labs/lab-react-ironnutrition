import React, { Component } from 'react'
import FoodBox from '../FoodBox/FoodBox'
import AddFood from '../AddFood/AddFood'
import foods from '../../foods.json';
import SearchBar from '../SearchBar/SearchBar'

class FoodList extends Component {

  state = {
    search: "",
    allFoods: [...foods],
    filteredFoods: [...foods],
    showForm: false,
    todayList: [],
    totalCalories: 0
  }

  handleSearchInput = (event) => {
    const { value } = event.target;

    const searchedFoods = this.state.allFoods.filter( (singleFood) => {
      if(singleFood.name.toLowerCase().includes(value)) {
        return true
      } else {
        return false
      }
    })
  
    this.setState({search: value, filteredFoods: searchedFoods})
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm  })
  }
  
  addNewFood = (newFood) => {
    const newAllFoods = [newFood, ...this.state.allFoods];    
    this.setState({ allFoods: newAllFoods, filteredFoods: newAllFoods });
  }

  addToday = (quantity, name, calories) => {
    
    const newItem = {
      name,
      quantity,
      calories,
      key: name + quantity
    }

    const newList = [...this.state.todayList]

    const itemToUpdate = newList.find( ({name}) => name === newItem.name )

    if (itemToUpdate === undefined) {

      //UNSHIFT OPTION
      newList.unshift(newItem)
      
      //SPREAD OPERATOR OPTION
      // newList = [
      //   newItem,
      // ...this.state.todayList]

    } else {
      itemToUpdate.quantity += Number(newItem.quantity);
    }

    let newCal = (calories * quantity) + this.state.totalCalories
    this.setState({todayList: newList, totalCalories: newCal})
  }

  deleteItem = (key, calories, quantity) => {

    let updatedCal = this.state.totalCalories - (calories * quantity)

    const newTodayList = this.state.todayList.filter((singleFood) => {
      if(singleFood.name === key ) {
        return false
      } else {
        return true
      }
    })

    this.setState({todayList: newTodayList, totalCalories: updatedCal})
  }

  render() {
    return (
      <div>

        <header className="App-header">
          <p  className="has-text-centered is-size-1 m-5">Iron Nutrition</p>
        </header>

        <button className="button is-rounded is-dark" onClick={this.toggleForm}>
              {this.state.showForm ? "Hide Form" : "Show Form" }
        </button>

        { this.state.showForm && <AddFood addFood={this.addNewFood}/> }
        
        <SearchBar textToSearch={this.state.search} handleSearch={this.handleSearchInput}/>

        <div className="columns">
          <div className="column">
            {this.state.filteredFoods.map((food) => {
                return(
                  <FoodBox 
                    key={food.name + food.calories} 
                    name={food.name} 
                    calories={food.calories} 
                    image={food.image}
                    addList={this.addToday} 
                  />
                )
            })}
          </div>

          <div className="column">
            <h1 className="is-size-2 has-text-left">Today's foods</h1>
            <br />
            <p> Total: {this.state.totalCalories} cal</p>
            <br />
            {this.state.todayList.map( (food) => {
              return (
                <ul style={ { display: "flex"} } key={food.name + food.calories}>
                  <li>{food.name} x </li>
                  <li> {food.quantity} = </li>
                  <li> {food.quantity * food.calories} calories</li>
                  <button className="button is-small is-rounded is-danger" onClick={() => {this.deleteItem(food.name, food.calories, food.quantity)}}><i class="fas fa-trash-alt"></i></button>
                </ul>
              )
            })}
          </div>
        </div>

      </div>
    )
  }
}

export default FoodList;