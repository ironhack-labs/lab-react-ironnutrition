import React, { Component } from 'react';
import './App.css';
import FoodBox from './components/FoodBox'
import data from './foods.json'
import FoodForm from './components/FoodForm';
import SearchBar from './components/SearchBar';

class App extends Component {
    state = {
        data,
        show: false,
        name: '',
        calories: '',
        image: '',
        button: "Add Food",
        addedFoods: [],

    }
    showFoodForm = () => {
      if(this.state.show) {
        return (
          <FoodForm 
            handleInput = {this.handleInput}
            addFood = {this.addFood}
          />
        )
      }
    }
    handleInput = (e) => {

      const {
        target: {name, value}
      } = e;
      this.setState({
        [name]: value
      })

    }

    addFood = e => {
      e.preventDefault()
      const {name, calories, image} = this.state
      console.log(this.state)

      this.setState({ data: [...data, {name, calories, image}]})
    }

    toggleForm = () => {
      this.setState({ show: !this.state.show })
    }


  render() {
    return (
      <div className="App">

      {/* <SearchBar/
      filterText  = 
      > */}
      {this.showFoodForm()}
      <button onClick={this.toggleForm}>Add newest Food</button>
        {
          this.state.data.map((e, idx) => {
          //  console.log(this.state.newData);
            return (
            <FoodBox
              name= {e.name}
              calories = {e.calories}
              image= {e.image}
              quantity={e.quantity}
              key={idx}
            />
            )
          })
        }
      </div>
    );
  }
}

export default App;
