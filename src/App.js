import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Foodbox from './Components/Foodbox/Foodbox';
import AddFoodForm from './Components/AddFoodForm/AddFoodForm';
import SearchBar from './Components/SearchBar/SearchBar'

class App extends React.Component {
 
    state = {
      foods,
      showFoodForm: false
  }
  addFood = (food) => {

    const foodCopy = [...this.state.foods];

    foodCopy.push(food)


      this.setState(
        {
          foods: foodCopy
        }
      )
  }

  toggleShowFoodForm = () => {

    this.setState({
        showFoodForm: !this.state.showFoodForm

    })


  }

  filterFoods = (text) => {

    const foodCopy = [...this.state.foods];

    foodCopy.includes(text)


  }


  render = () => (
    <div className="App">
     {this.state.showFoodForm ? <AddFoodForm addFood={this.addFood}/> : null}

      <button onClick={()=> this.toggleShowFoodForm()}>Add new food</button>
      <SearchBar  filterFoods={this.filterFoods} />
      {this.state.foods.map((food, idx) => {
        return <Foodbox {...food} key={`${idx}-${food.name}`} />;
      })}
    </div>
  );
}

export default App;
