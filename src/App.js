import React from 'react';
import foodList from './foods.json';
import Foodbox from './components/FoodBox/FoodBox';
import 'bulma/css/bulma.css';
import './App.css';


class App extends React.Component {
  state = {
    foods: foodList 
  }
  
  addFood = () => {
    const arrayCopy = [ ...this.state.foods ];
    arrayCopy.push({ id: this.state.length, title: "Nueva película", year: "1988", runtime: "92", genres: ["Comedy", "Fantasy"], director: "Tim Burton", actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page", plot: "A couple of recently deceased ghosts contract the services of a \"bio-exorcist\" in order to remove the obnoxious new owners of their house.", posterUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg" });

    this.setState({ foods: arrayCopy });
  }

  displayFoods = () => {
    return this.state.foods.map((singleFood) => {

      return (
        
          <Foodbox {...singleFood}/>
        
      )

    })
  }

  render() {
    return (
      <div>
      <Form addFood={(food) => this.addFood(food)} />
      <button onClick={() => this.addFood()}>Add food</button>
        <div>
        {
        this.displayFoods()
        }
        </div>
      </div>
    )
  }
}

export default App;
