import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import FoodForm from './Components/FoodForm';


class App extends React.Component {
  state = {
    foods: foods,
  };

  handleForm = () => {
    const foodForm = document.getElementById("foodForm");
    foodForm.classList.toggle("hidden");
  }

  handleAddFood = (food) => {
    this.setState({
      foods: [food, ...this.state.foods],
    });

    this.handleForm();
  };

  render() {
  return (
    <div className="App">

      <div>
        <button onClick={this.handleForm}>Add New Food</button>
        <div id="foodForm" className="hidden" >
          <FoodForm callbackFn={this.handleAddFood}/>
        </div>
      </div>


      {this.state.foods.map((food) => {
        return (
          <FoodBox 
          name={food.name}
          calories={food.calories}
          image={food.image}
          quantity={food.quantity}
          />
        );
      })}
    </div>
    );
  }
}

export default App;
