import React from 'react';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search';


class App extends React.Component {
  state = {
    foods: foods,
    renderFoods: foods,
    todayFoods: []
  }

  updateQuantity(index, e){
    const {value} = e.target
    const stateCopy = {...this.state}
    stateCopy.foods[index].quantity = value
    this.setState(stateCopy)
  }

  addFood(name, calories, quantity){
      const stateCopy = {...this.state}
      stateCopy.todayFoods.push({name, calories, quantity})
      this.setState(stateCopy)
  }

  filterFoods(e) {
    const value = e.target.value.toLowerCase();
    const filteredFoods = this.state.foods.filter((food) => {
      return food.name.toLowerCase().includes(value);
    });
    this.setState({ ...this.state, renderFoods: filteredFoods });
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">IronNutrition</h1>
        <Search filter={(e) => this.filterFoods(e)} />
        <FoodBox
          foods={this.state.renderFoods}
          addFood={(name, calories, quantity)=>this.addFood(name, calories, quantity)}
          updateQuantity={(index, e)=>this.updateQuantity(index, e)}
          todayFoods={this.state.todayFoods}
        />
      </div>
    )
  }
}

export default App;
