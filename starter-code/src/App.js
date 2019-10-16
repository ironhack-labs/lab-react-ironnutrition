import React, { Fragment, Component } from 'react';
import FoodBox from './FoodBox'
import Form from './Form'
import Search from './Search'
import foods from './foods.json'
import './App.css';
import 'bulma/css/bulma.css';

class App extends Component {
  constructor(props){
    super(props)
    this.showFoods = this.showFoods.bind(this);
    this.state = {
      foods: foods,
      showForm: false,
      quantities: [],
      total: 0
    }
  }
  showFoods(){
    return this.state.foods.map((food,index) => {
      return  <FoodBox handleAddQuantity={(f) => this.addQuantity(f)} key={index} food={food} />
    })
  }
  showForm(){
    return (
      <Fragment>
        <Form handleAddFood={(food) => this.addFood(food)}/>
        <button onClick={() => this.handleShowForm()}>Return to Search</button>
      </Fragment>
    ) 
  }
  showSearchbar(){
    return (
      <Fragment>
        <Search handleSearchFood={(search) => this.searchFood(search)}/>
        <button onClick={() => this.handleShowForm()}>Add Food</button>
      </Fragment>
    )
  }
  handleShowForm(){
    this.setState({
      showForm: !this.state.showForm
    })
  }
  addFood(food){
    let foodsCopy = [...this.state.foods]
    foodsCopy.unshift(food)
    this.setState({
      foods: foodsCopy
    })
  }
  searchFood(search){
    let foodsCopy = [...foods]
    this.setState({
      foods: foodsCopy.filter(food=> food.name.toLowerCase().includes(search.toLowerCase()))
    })
    
  }
  showQuantities(){
    return this.state.quantities.map((quant,index) => {
      console.log(quant)
      return <li key={index}>{quant.quantity} {quant.name } = {quant.quantity * Number(quant.calories)} </li>
    })
  }
  addQuantity(food){
    let quantitiesCopy = [...this.state.quantities]
    quantitiesCopy.push(food)
    this.setState({
      quantities: quantitiesCopy,
      total: this.state.total + food.quantity * food.calories
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">IronNutrition</h1>
          <div>
          {!this.state.showForm && this.showSearchbar()}
          { this.state.showForm && this.showForm()}
          </div>
          <div className="columns">
            <div class="column">
              {this.showFoods()}
            </div>
            <div class="column">
              <h1>Today's foods</h1>
              <ul>
                {this.showQuantities()}
                Total: {this.state.total} calories
              </ul>
            </div>
          </div>
         
        </div>
      

      </div>
    );
  }
}

export default App;
