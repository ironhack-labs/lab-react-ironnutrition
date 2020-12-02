import React from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBoxCard.js'
import AddFoodForm from './Components/AddFoodForm.js'
import './App.css';


class App extends React.Component {
  state = {
    foods:foods
  }

  addFood = (foodAdded) => {
      const updatedFoods = [...this.state.foods, foodAdded];
      this.setState({ foods: updatedFoods });
    }
  
  toggleForm = () => {
    this.setState({ isForm: !this.state.isForm });
  }

  render() {
    return (
      <div className="App" id="root">
        <div className="container">
        <h1 class="title">IronNutrition</h1>
        <div>
          <input type="text" className="input search-bar" name="search" placeholder="Search" value=""/>
        </div>
        <div>
         <button onClick={this.toggleForm}>Add Food</button>
          {this.state.isForm
            ? 
            <AddFoodForm 
              newfood={this.addFood} 
              isFormToggle={this.toggleForm}
            />
            :
            null 
          }
        </div>
        <div>
          {this.state.foods.map((food)=>{
                return (
                  <div>
                    <FoodBox
                    foodObj={food}
                    />
                </div>
                )
              })}
          <div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}



export default App;
