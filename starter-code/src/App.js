import React, { Component } from 'react';
import "bulma/css/bulma.css"
import food from "./foods.json"
import './App.css';
import FoodBox from './components/foodbox';
import SearchBar from './components/searchBar';
import Form from './components/form';
import { Link, Route } from "react-router-dom"
import SingleFood from './components/foodCard';

class App extends Component {
  state = {
    foods: [],
    clone: [],
    allFood: [],
    foodCard: [],
    name: "",
    calories: "",
    image: "",
    visible: false,
    searchQuery: ""
  }

  async componentDidMount() {
    await this.setState({
      foods: food,
      allFood: food,
      clone: food
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


  renderCard = () => {
    return <SingleFood
    />
  }

  handleClick = (e) => {
    if (this.state.foodCard.length > 0) {
      this.setState({
        visible: !this.state.visible
      })
    }
    if (this.state.foodCard.length > 0) {

    }
  }


  valueChange = (e, name) => {

    let card = [...this.state.foodCard]
    const foods = [...this.state.clone]
    let oneFood = foods.find(f => f.name === name)
    const index = foods.indexOf(oneFood)
    let item = foods[index]
    item.quantity = e.currentTarget.value
    item.total = item.calories * item.quantity
    if (card.indexOf(oneFood) < 0) {
      card.push(item)
    }

    this.setState({
      foodCard: card,
      foods: foods
    })

  }


  handleSubmit = (e) => {
    e.preventDefault()
    const foods = [...this.state.foods]
    const allFood = [...this.state.allFood]
    const newFood = { name: this.state.name, calories: this.state.calories, image: this.state.image }
    console.log(newFood)
    foods.push(newFood)
    allFood.push(newFood)
    this.setState({
      foods: foods,
      newFood: newFood,
      name: "",
      calories: "",
      image: "",
    })
  }

  renderPages = () => {

    return this.state.foods.map((food, index) => {
      return <FoodBox
        handleChange={this.valueChange}
        handleClick={this.handleClick}
        key={index}
        {...food}
      />
    })
  }



  render() {
    // console.log(this.state.foodCard.map(item => item.quantity))
    return (
      <div className="App" >

        <SearchBar
          value={this.state.searchQuery}
          onSearch={this.handleQuery}
        />

        {this.state.visible &&
          <SingleFood
            food={this.state.foodCard}
          />
        }

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
