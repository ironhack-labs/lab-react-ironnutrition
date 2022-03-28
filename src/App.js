import React, { Component }  from 'react';
import { v4 as uuidv4 } from 'uuid';
import FoodBox from './components/FoodBox/FoodBox';
import NewForm from './components/NewForm/NewForm';
import Search from './components/Search/Search';
import foods from './foods.json'
import './assets/styles/general.scss'
import './App.scss';


class App extends Component {
    state = {
      foods: [...foods],
      showForm: false,
      search: ''
    }


  searchFood = (event) => {
    this.setState({
      search: event.target.value
    })
  }


  showForm = () => {
    (this.state.showForm === false ?
      this.setState({
        showForm: true
      })
      :
      (
        this.setState({
          showForm: false
        })
      )
    )  
  }

  onAddFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4()
    }

    this.setState({ foods: [newFood, ...this.state.foods] })
  }

  getFoodsBySearchFilter = () => {
    const { foods, search } = this.state

    return foods.filter(food => {
      if (food.name.toLocaleLowerCase().includes(search.toLowerCase())) {
        return true
      }

      return false
    })
  } 


  render() {
    const { showForm } = this.state
    const foods = this.getFoodsBySearchFilter()
  
    return (
      <div className="wrapper">

        <div>
          <Search search={this.state.search} searchFood={this.searchFood}  />        
        </div>

        <div>
          <button onClick={this.showForm}>Add new food</button>

            {showForm && <NewForm onAddFood={this.onAddFood} />}
        </div>
        
        <div>
          <FoodBox foods={foods} />
        </div>
        
      </div>
    )
  }
}

export default App;