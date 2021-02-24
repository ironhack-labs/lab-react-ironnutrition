import React, { Component } from 'react'
import FoodBox from '../FoodBox/FoodBox'
import AddFood from '../AddFood/AddFood'

class FoodList extends Component {

  state = {
    search: '',
    allFoods: this.props.db,
    filteredFoods: this.props.db,
    showForm: false,
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
        
        <form>
          <input 
            className="input is-medium is-rounded m-5" 
            value={this.state.search} 
            onChange={this.handleSearchInput}>     
          </input>
        </form>

        <div className="columns">
          <div className="column">
            {this.state.filteredFoods.map((food) => {
                return(
                  <FoodBox 
                    key={food.name + food.calories} 
                    name={food.name} 
                    calories={food.calories} 
                    image={food.image} 
                  />
                )
            })}
          </div>

          <div className="column">
            <h1 className="is-size-2">Today's foods</h1>
          </div>
        </div>

      </div>
    )
  }
}

export default FoodList;