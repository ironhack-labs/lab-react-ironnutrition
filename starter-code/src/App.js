import React, { Component, Fragment } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood';
import NewFood from './components/NewFood';

class App extends Component {
  state = {
    foods: [],
    newFood: {},
    searchFood: [],
    todaysFood: [], 
    showForm: false
  }
  componentDidMount = () => {
    this.setState({ foods, searchFood:foods })
  }

  onAdd = (e) => {
    const {todaysFood} = this.state
    let element = e.target.id
    let cals = e.target.getAttribute('calories')
    let quant = e.target.getAttribute('quantity')
    let totalCals = cals * quant
    let elObj = {element,cals,quant,totalCals}
    todaysFood.push(elObj)
    this.setState({todaysFood})
  }

  onChangeQty = (e) => {
    const {foods} = this.state
    foods[e.target.name].quantity = e.target.value
    this.setState({foods})
  }

  drawFoodBox = () => {
    const { foods }  = this.state
    return(
      foods.map((item,index)=> <FoodBox arrayPos={index} onChangeQty={this.onChangeQty} onAdd={this.onAdd} key={index} {...item}/> ) 
    )
  }

  drawFoodAdded = () => {
    const {todaysFood} = this.state
    return todaysFood.map((item,index) => <NewFood key={index} {...item}/>) 
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { foods, newFood } = this.state
    newFood.quantity = 0
    foods.push(newFood)
    this.setState({foods})
  }

  onChange = (e) => {
    const {newFood} = this.state
    newFood[e.target.name] = e.target.value
    this.setState({newFood})
  }

  compare = (actual,query) => {
    if(actual.name.indexOf(query) != -1) return true
    return false
  }

  resetSearch = () => {
    let {searchFood, foods} = this.state
    foods = searchFood
    this.setState({foods})
  }

  onSearch = (e) => {
    let {foods} = this.state
    const searchQuery = e.target.value
    foods = foods.filter( element => this.compare(element,searchQuery))
    this.setState({foods})
    if( e.keyCode === 8) this.resetSearch()
  }
  
  toggleForm = () => {
    let {showForm} = this.state
    if(showForm) showForm = false
    else showForm = true
    this.setState({showForm})
  }

  render() {
    console.log()
    const {drawFoodBox, onSubmit, onChange, onSearch, drawFoodAdded, toggleForm} = this
    const { newFood, showForm } = this.state
    return (
      <Fragment>
        <h1>Iron Nutrition</h1>
        <input type="text" name="searchBar" onKeyUp={onSearch} placeholder="Search here"/>
        <br/>
        <button onClick={toggleForm}>Add food</button>
        {showForm && <AddFood newFood={newFood} onChange={onChange} onSubmit={onSubmit}/>}
        <div className="columns">
          <div className="column">
            {drawFoodBox()}
          </div>
          <div className="column">
            <h3>Today's food</h3>
            {drawFoodAdded()}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
