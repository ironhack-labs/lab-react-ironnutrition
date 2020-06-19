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

    }

  state = {
    foods: foods,
    formShowing: false
  }

  addFood(food){
    let foodsCopy = JSON.parse(JSON.stringify(this.state.foods));
    foodsCopy.unshift(food);
    this.setState({
      foods: foodsCopy,
      formShowing: false
    });
  }

  showForm(){
    this.setState({
      formShowing: true
    });
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 class="title">IronNutrition</h1>

          <div className="columns">
            <div className="column FoodBox">
            <button onClick={this.showForm}>Add your Food</button>
            {this.state.formShowing && <AddFood addFood={this.addFood}/>}
              {
                this.state.foods.map((food)=>
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
