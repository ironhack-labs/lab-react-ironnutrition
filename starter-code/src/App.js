import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodDetail from './components/FoodDetail';
import AddFoodForm from'./components/AddFoodForm';
import FoodList from './components/FoodList';


class App extends Component {
constructor(props){
  super(props)
    this.state = {
                  foods: foods, 
                  search: '',
                  foodFormDisplay: false
                }
    this.updateFood = this.updateFood.bind(this);
    this.updateSearchBar = this.updateSearchBar.bind(this);
    this.addFood = this.addFood.bind(this);
    this.changefoodFormDisplay = this.changefoodFormDisplay.bind(this);
    this.removeFood = this.removeFood.bind(this);
}



updateFood(name, quantity) {
  let updatedFoods = this.state.foods.map((food) => {
    if(food.name === name) food.quantity = parseInt(food.quantity) + parseInt(quantity);
    return food;
  })

  this.setState(updatedFoods);
}

removeFood(name) {
  this.setState({
    foods: this.state.foods.filter((food)=> food.name !=name)
  });
}

addFood(food){
  let foodsCopy = [food,...this.state.foods];
  this.setState({
    foods: foodsCopy
  })
  this.changefoodFormDisplay();
}

updateSearchBar(event){
  this.setState({
    search: event.target.value
  })
}

changefoodFormDisplay(){
  this.setState({
    foodFormDisplay: !this.state.foodFormDisplay
  })
}

render() {
  return (
    <div className="app">
      <h1 className="u-m-10 u-p-10">Iron Nutrition</h1>
      <div className="columns u-m-10">
        <div className="column is-full">
          <imput className='imput' type='text' placeholder='Text input' value={this.state.search} onchange={this.updateSearchBar}/>
        </div>
      </div>

      {this.state.foodFormDisplay &&
          <AddFoodForm addFood={this.addFood} changefoodFormDisplay={this.changefoodFormDisplay} />
      }

      <div className="clumns u-m-1-">
        <div className='cloumn'>
          <buttom className='button' onClick={this.changefoodFormDisplay}>Add Food</buttom>
        </div>
      </div>
      <div className="columns u-m-10">
        <div className='column is-half'>
          {
            this.state.foods.filter((food)=>
              food.name.toLowerCase().includes(this.state.search.toLowerCase())
            )
            .map((food)=>
              <FoodDetail
                {...food}
                updateFood={this.updateFood}
                removeFood={this.removeFood}
                />
              )
          }
        </div>
        <div className="column is-half">
          <FoodList foods={this.state.foods}/>
        </div>
      </div>
    </div>
  )
} 
}

export default App;
