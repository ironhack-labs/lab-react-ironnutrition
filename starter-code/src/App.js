import React, { Component, Fragment } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import FoodForm from './components/FoodForm';

class App extends Component {

  state = {
    food:{},
    foods:[],
    todaysFood:[]
  }

  componentWillMount = () => {
    this.setState({foods})
  }

  drawFoodBox = () => {
    const {foods} = this.state
    return foods.map((box,idx)=> <FoodBox onChangeQty={this.onChangeQty} onAdd={this.onAdd} key={idx} arrayPos={idx} {...box} />)
  }

  onSubmit = e => {
    e.preventDefault()
    const {food, foods} = this.state
    food['quantity']=0
    foods.push(food)
    this.setState({foods})
  }

  onChange = e => {
    const {food} = this.state
    food[e.target.name] = e.target.value
    this.setState({food})
    console.log(this.state.food)
  }

  onSearch = e => {
    let {foods} = this.state
    const searchQuery = e.target.value.toUpperCase()
    foods = foods.filter((food)=>{
      return food.name.toUpperCase().includes(searchQuery)
    })
    this.setState({foods})

    // let updatedList = this.state.foods;
    // updatedList = updatedList.filter(function(item){
    //   return item.toLowerCase().search(
    //     e.target.value.toLowerCase()) !== -1;
    // });
    // this.setState({filterFoods: updatedList})
  }

  onChangeQty = e => {
    const {foods} = this.state
    foods[e.target.name].quantity = e.target.value
    this.setState({foods})
  }

  onAdd = e => {
    let {todaysFood} = this.state
    const {foods} = this.state
    const tFood = {
      name:foods[e.target.name].name,
      qty:foods[e.target.name].quantity,
      cal:foods[e.target.name].calories*foods[e.target.name].quantity
    }
    todaysFood.push(tFood)
    this.setState({todaysFood})
  }

  //Tratando de obtener el acumulado de calorías
  // { todaysFood.length ? todaysFood.reduce((a, b) => ({totalCalories: a.qty + b.qty})) : 0}

  render() {
    // console.log(this.state)
    const { drawFoodBox, onSubmit, onChange, onSearch, onAdd } = this
    const {food, todaysFood} = this.state
    return (
      <Fragment>
        <h1>Iron Nutrition</h1>
        <input type="text" onChange={onSearch} name="searchBar" />
        <FoodForm onSubmit={onSubmit} onChange={onChange} {...food} />
        <div className="columns">
          <div className="column">
            {drawFoodBox()}
          </div>
          <div className="column">
            <h2>Today's Food</h2>
            {todaysFood.map((food,idx) => <li key={idx}>{food.qty} {food.name} - {food.cal} cal</li>)}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;
