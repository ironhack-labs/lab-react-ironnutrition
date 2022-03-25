import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreateFoodForm from './Components/CreateFoodForm/CreateFoodForm';


class App extends Component {


  state = {
    foods: [...foods],
    formStatus: false,
    search: ''
  }


  handleSearchOnChange = (event) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  getSearchByName = () => {
    const { foods, search } = this.state

    return foods.filter(food => {
      if (food.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        return true
      }
      return false
    })
  }

  setFormStatus = () => {
    this.setState({ formStatus: !this.formStatus });
  }


  onAddFood = (food) => {
    const newFood = {
      ...food,
      id: uuidv4()
    }

    this.setState({
      foods: [newFood, ...this.state.foods],
      formStatus: false
    })

  }


  render() {
    const { formStatus, search } = this.state
    const listedFood = this.getSearchByName()

    return (

      <div className="App">
        <h1 className='title'>Iron Nutrition</h1>
        <div className='column'>
          <label className="label is-justify-content-flex-start"
            htmlFor='search'
          >Search</label>
          <div className="control">
            <input className="input"
              type="text"
              placeholder="Search"
              name="search"
              value={search}
              onChange={this.handleSearchOnChange} />
          </div>
        </div>
        <br />
        <div className='column'>
          {formStatus ?
            <CreateFoodForm onAddFood={this.onAddFood} />
            : <button onClick={this.setFormStatus}
              className="button is-info"
            > add New Dish
            </button>
          }
        </div>
        <div style={{ width: 500 }} className='mx-4 mt-5'>
          <FoodBox foods={listedFood} />
        </div>
      </div>
    )
  }
}

export default App;
