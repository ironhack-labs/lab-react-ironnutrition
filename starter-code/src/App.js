import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'

import FoodBox from './components/FoodBox'
import Form from './components/Form'
import Search from './components/Search'
import List from './components/List'


import 'bulma/css/bulma.css'




class App extends Component {
  constructor() {
    super()
    this.state = {
      foodsInfo: foods,
      allFoods: foods,
      showForm: false,
      foodList: []
    }
    console.log(this.state)
  }

  addFood = food => {
    const foodCopy = [...this.state.allFoods]
    foodCopy.push(food)
    this.setState({
      foodsInfo: foodCopy
    })
  }

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm })
  }

  searchFood = string => {
    const foodCopy = [...this.state.allFoods]
    this.setState({
      foodsInfo: foodCopy.filter((elm, idx) => elm.name.toLowerCase().includes(string.toLowerCase()))
    })
  }

  addList = food => {
    const foodCopy = [...this.state.foodList]
    foodCopy.push(food)
    this.setState({
      foodList: foodCopy
    })
  }

  render() {


    return (
      <React.Fragment className="react">

        <button onClick={this.toggleForm}>Add Food</button>
        {this.state.showForm ? <Form addFood={this.addFood} /> : null}
        <Search searchFood={this.searchFood} />
        <div className="columns">
          <div className="column">
            {this.state.foodsInfo.map((elm, idx) => {
              return (<FoodBox key={idx} name={elm.name} calories={elm.calories} image={elm.image} addList={this.addList} />)
            })}
          </div>
          <div className="column">
            <h2>Today's Food</h2>

            {this.state.foodList.map(elm => {
              return (<li>{elm}</li>)
            })}


          </div>
        </div>






      </React.Fragment>
    );
  }
}

export default App;
