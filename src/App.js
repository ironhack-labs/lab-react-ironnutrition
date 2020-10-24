import React, { Component } from 'react'
import Foodbox from './components/foodbox/Foodbox';
import Search from './components/search/Search';
import TodaysFoods from './components/todaysFoods/TodaysFoods';
import foodsFromJson from './foods.json';

export default class App extends Component {

  state ={
    foods: foodsFromJson,
    name: ' ',
    calories: 0,
    image: ' ',
    quantity: 0,
    formVisible: false,
    todaysFoods: [],
    allCalories: 0
  }

  showForm = () => {
    this.setState({
      formVisible: !this.state.formVisible
    })
  }

  changeHandler = (e) => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image
    }
    console.log(newFood)
    this.setState({ 
      foods: [newFood, ...this.state.foods],
      formVisible: false
    }, () => console.log(this.state.foods));
  }

  searchHandler = (e) => {
    let searchFood = e.target.value.toLowerCase()
    // console.log(searchFood)
    this.setState({
      foods: this.state.foods.filter((food) => {
        return food.name.toLowerCase().includes(searchFood) // includes() is case sensitive
      })
    })
  }

  addHandler = (item) => {
    console.log(item)
    this.setState({
      todaysFoods: [item, ...this.state.todaysFoods]
    })
  }

  render() {
    console.log(this.state.todaysFoods)
    return (
      <div>
        <div>
          <Search onSearch={this.searchHandler}/>
        </div>
        <div className="columns">
          <div className="column">
          {this.state.foods.map(item => {
            return (
              <Foodbox onAdd={this.addHandler}
                key={item.name}
                item={item} />
            )
          })} 
          <button onClick={this.showForm}>Add food</button>
          {this.state.formVisible ?
          <form onSubmit={this.submitHandler}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
            <label htmlFor="calories">Calories</label>
            <input type="text" name="calories" value={this.state.calories} onChange={this.changeHandler}/>
            <label htmlFor="image">Image</label>
            <input type="text" name="image" value={this.state.image} onChange={this.changeHandler}/>
            <input type="submit"/>
          </form>
          : " "}
        </div>
        <div className="column">
          <h3>Today's foods</h3>
          {this.state.todaysFoods.map(item => {
            return (
            <TodaysFoods
              key={item.name}
              item={item} />
            )
          })}
          <p>Total: <span>
             {this.state.todaysFoods.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.calories * currentValue.quantity)
          }, 0)}
          </span> calories</p>
        </div>
        </div>
      </div>
    )
  }
}
