import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/foodbox/FoodBox';
import AddFood from './components/addfood/AddFood';
import Search from './components/search/Search';

class App extends React.Component {
  state = {
    allTheFoods: foods,
    invisibleList: foods.slice(5),
    filteredList: foods,
    selectedFood: [],
  };

  // Getting rid of dupes by name and remove food of 0 quantity
  addSelectedFoodToTheList = (selectedFoodFromBox) => {
    const tempCopy = [...this.state.selectedFood, selectedFoodFromBox];
    const arrayUniqueByKey = [
      ...new Map(tempCopy.map((item) => [item['name'], item])).values(),
    ].filter((notZeroFood) => +notZeroFood.quantity !== 0);

    this.setState(
      {
        selectedFood: [...arrayUniqueByKey],
      },
      () => console.log('in the app', this.state.selectedFood)
    );
  };

  addFoodHandler = (food) => {
    this.setState(
      {
        allTheFoods: [food, ...this.state.allTheFoods],
        filteredList: [food, ...this.state.allTheFoods],
      },
      console.table(this.state.allTheFoods)
    );
  };

  searchFoodHandler = (filteredFoodList) => {
    this.setState({
      filteredList: filteredFoodList,
    });
  };

  getCaloriesOfSelectedFoods = () => {
    return this.state.selectedFood.reduce((acc, item, index, arr) => {
      return (acc += +item.calories * item.quantity);
    }, 0);
  };

  removeItemFromTodayFood = (foodName) => {
    const objIndex = this.state.selectedFood.find((food, index) => {
      if (food.name === foodName) {
        return index;
      }
      return -1;
    });

    const cloneSelectedFood = [...this.state.selectedFood];
    cloneSelectedFood.splice(objIndex, 1);
    this.setState({
      selectedFood: cloneSelectedFood,
    });
  };

  render = () => {
    return (
      <div className='App'>
        <h1>
          <b>IronNutrition</b>
        </h1>
        <AddFood addFoodItem={this.addFoodHandler} />
        <Search
          onChangeSearchHandler={this.searchFoodHandler}
          allTheFoods={[...this.state.allTheFoods, ...this.state.invisibleList]}
          filteredList={this.state.filteredList}
        />
        <div className='content-container'>
          <div className='food-list'>
            {this.state.filteredList.map((food, index) => {
              return (
                <FoodBox
                  key={index}
                  name={food.name}
                  calories={food.calories}
                  image={food.image}
                  addFooodToList={this.addSelectedFoodToTheList}
                />
              );
            })}
          </div>
          <div className='right-col'>
            <p>Today's foods:</p>
            <ul>
              {this.state.selectedFood.map((selection) => {
                const { name, calories, quantity } = selection;
                return (
                  <li>
                    {quantity} {name} = {quantity * calories} cal
                    <button onClick={() => this.removeItemFromTodayFood(name)}>
                      Remove Item
                    </button>
                  </li>
                );
              })}
            </ul>
            <div>
              <hr />
              <p>
                Total Calories: <b>{this.getCaloriesOfSelectedFoods()} cal</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
