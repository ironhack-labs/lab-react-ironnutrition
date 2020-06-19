import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';


class App extends React.Component {
  constructor(props){
      super(props);
      this.addFood = this.addFood.bind(this);
      this.showForm = this.showForm.bind(this);
      this.searchFood = this.searchFood.bind(this);


    }

  state = {
    foods: foods,
    formShowing: false,
    filteredFoods: foods
  }

  addFood(food){
    let foodsCopy = JSON.parse(JSON.stringify(this.state.foods));
    foodsCopy.unshift(food);
    this.setState({
      foods: foodsCopy,
      formShowing: false,
    });
  }

  showForm(){
    this.setState({
      formShowing: true
    });
  }

  searchFood(e){
    let searchTerm = e.target.value;
    let newFilterFoods = this.state.foods.filter((food)=> food.name.includes(searchTerm))
    this.setState({
      filteredFoods: newFilterFoods 
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 class="title">IronNutrition</h1>
          <div>
            <input
              type="text"
              class="input search-bar"
              placeholder="Search"
              onChange={this.searchFood}
            />
          </div>

          <div className="columns">
            <div className="column FoodBox">
            <button className="button is-info" onClick={this.showForm}>Add your Food</button>
            {this.state.formShowing && <AddFood addFood={this.addFood}/>}
              {
                this.state.filteredFoods.map((food)=>
                <FoodBox name={food.name} calories={food.calories} image={food.image}/>
                )
              }
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
