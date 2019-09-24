import React, { Component } from 'react';
import "bulma/css/bulma.css"
import food from "./foods.json"
import './App.css';
import FoodBox from './components/foodbox';
import SearchBar from './components/searchBar';
import Form from './components/form';
import { Link, Route } from "react-router-dom"

class App extends Component {
  state = {
    foods: [],
    allFood: [],
    name: "",
    calories: "",
    image: "",
    searchQuery: ""

  }

  async componentDidMount() {
    await this.setState({
      foods: food,
      allFood: food
    })
  }


  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleQuery = query => {
    const { allFood } = this.state
    let filteredFoods = [...allFood].filter(food => {
      return food.name.toLowerCase().startsWith(query.toLowerCase())
    })

    this.setState({
      searchQuery: query,
      foods: filteredFoods
    })

  }




  handleSubmit = (e) => {
    e.preventDefault()
    const foods = [...this.state.foods]
    const newFood = { name: this.state.name, calories: this.state.calories, image: this.state.image }
    console.log(newFood)
    foods.push(newFood)
    this.setState({
      foods: foods,
      name: "",
      calories: "",
      image: ""

    })
  }

  renderPages = () => {

    return this.state.foods.map(food => {
      return <FoodBox
        key={food.name}
        {...food}
      />
    })
  }



  render() {

    return (
      <div className="App" >

        <SearchBar
          value={this.state.searchQuery}
          onSearch={this.handleQuery}
        />
        {this.renderPages()}

        <Link
          to={'/create'}
          className="button">
          Add Food
       </Link>

        <div>

          <Route
            path="/create"
            render={(props) =>
              <Form
                handleChange={this.handleChange}
                name={this.state.name}
                calories={this.state.calories}
                image={this.state.image}
                handleSubmit={this.handleSubmit}
                {...props} />}
          />
        </div>


      </div>
    );
  }
}

export default App;
