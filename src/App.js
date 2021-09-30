import React from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import './FoodBox.css';
import AddFood from './AddFood';
import Search from './Search';

class App extends React.Component {
  state = {
    foods: foods,
    showAddFood: false,
    showButton: true,
    searchTerm: '',
  };

  foodFormHandler = () => {
    this.setState({
      showAddFood: true,
      showButton: false,
    });
  };

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods]; // copy!

    foodsCopy.push(theFood);
    console.log(theFood);

    this.setState({
      foods: foodsCopy,
    });
  };

  filterList = (searchTerm) => {
    //const foodsCopy = [...this.state.foods]; // copy!

    this.setState({
      searchTerm: searchTerm,
    });
  };

  render() {
    // best practice : do the filtering in the render function
    let filteredFoods = this.state.foods.filter((food) =>
      food.name.toLowerCase().includes(this.state.searchTerm)
    );

    return (
      <div className="App">
        <h1>
          <b>IRON NUTRITION</b>
        </h1>
        <div>
          <Search searchHandler={this.filterList}></Search>
        </div>
        <div className="nutritionPage">
          <div className="foodList">
            {filteredFoods.map((food) => {
              return (
                <FoodBox
                  key={food.name}
                  image={food.image}
                  name={food.name}
                  calories={food.calories}
                />
              );
            })}
          </div>
          <div className="addForm">
            {this.state.showAddFood && (
              <AddFood addNewFood={this.addFoodHandler}></AddFood>
            )}
            {this.state.showButton && (
              <button onClick={this.foodFormHandler}>Add Food Item</button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
