import React from 'react';
import foods from './foods.json';
import './App.css';
import 'bulma/css/bulma.css';
import Food from './Food';
import AddFood from './AddFood';

class App extends React.Component {

  state={
    foods:foods
  }

  addFoodHandler = (newFood) => {
    
    this.setState({

      foods: this.state.foods.concat(newFood)
    })
  }


    let clicked = false;

    buttonClicked = () => {
      clicked = true;
      console.log('clicked')
    }



  render() {

  return (
    <div className="App">

     {this.state.foods.map((m) => <Food name={m.name} key={m.name} calories={m.calories} image={m.image} quantity={m.quantity}/>)}

    <button onClick ={() => this.buttonClicked()} className="button is-info">Add new Food</button>
    <AddFood addFoodHandler={this.addFoodHandler}></AddFood>

    </div>
  );
}
}
export default App;
