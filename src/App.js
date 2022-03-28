import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox/FoodBox';
import { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import CreateFoodForm from './Components/CreateFoodForm/CreateFoodForm';
import TodayMenuBox from './Components/TodayMenu/TodayMenuBox';
class App extends Component {


  state = {
    foods: [...foods],
    formStatus: false,
    search: '',
    todayMenu: []
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


  addTodayMenu = (food) => {

    const { todayMenu } = this.state
    const canAdd = !todayMenu.some(({ id }) => food.id === id)

    if (canAdd) {
      this.setState({ todayMenu: [food, ...todayMenu] })
    }
  }




  setFormStatus = () => {
    this.setState({ formStatus: !this.state.formStatus });
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
    const { formStatus, search, todayMenu } = this.state
    const listedFood = this.getSearchByName()

    return (

      <div className="App">
        <h1 className='title'>Iron Nutrition</h1>
        <div className='is-flex '>
          <div className='is-flex-direction-row is-justify-content-flex-start'>
            <div className='is-flex-direction-row mx-3'
              style={{ width: 900}}>
              <label className="label is-align-self-flex-start mx-4 has-text-left		"
                htmlFor='search'
              >Search</label>
              <div className="is-flex-direction-row">
                <input className="input"
                  type="text"
                  placeholder="Search"
                  name="search"
                  value={search}
                  onChange={this.handleSearchOnChange} />
              </div>
            </div>
            <div className='is-flex-direction-row has-text-left	mx-3'>
              {formStatus &&
                <CreateFoodForm onAddFood={this.onAddFood} />
              }
              <br />
              <button onClick={this.setFormStatus}
                className="button is-info"
              > {formStatus ? 'Close menu' : 'add New Dish'}
              </button>
            </div>
          </div>
        </div>
        <div className='is-flex'>
          <div style={{ width: 500 }} className='mx-4 mt-5 is-flex-direction-row'>
            <FoodBox foods={listedFood}
              addItem={this.addTodayMenu}
            />
          </div>
          <div className='mx-6 mt-5 is-flex-direction-row'>
            <TodayMenuBox foods={todayMenu} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
