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
    );
  };
}

export default App;
