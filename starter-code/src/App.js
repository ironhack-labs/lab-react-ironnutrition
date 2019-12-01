import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './FoodBox';
import FormFood from './FormFood';
import SearchBar from './SearchBar';
import TodaysFoods from './TodaysFoods';


class App extends Component {
  state = {
    allFoods: foods,
    // todaysFoods pour pouvoir avoir un tableau avec nos datas à afficher
    todaysFoods: [],
    showForm: false,
  }

  addFood = newFood => {
    const copyFoods = [...this.state.allFoods];
    copyFoods.push(newFood)
    this.setState({ allFoods: copyFoods });

  }

  displayForm = () => {
    this.setState({ showForm: !this.state.showForm });
  }

  handleSearch = (value) => {
    let filteredFood = foods.filter(food => food.name.toUpperCase().includes(value.toUpperCase()));
    this.setState({ allFoods: filteredFood });
  }

  // 4) fonction handleAddFood déclarée ici avec ses paramètres (qu'elle recoit de onAdd dans composant Foodbox via addToday)
  handleAddFood = (name, quantity, calories) => {
    const todaysFoodsState = this.state.todaysFoods;
    const food = { name, quantity, calories };

    todaysFoodsState.push(food);

    this.setState({
      todaysFoods: todaysFoodsState
    });
  }


  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>

        <button
          className="add-food"
          onClick={this.displayForm}
        >add food</button>

        {/* affiche le formulaire pour add a food */}
        <FormFood isVisible={this.state.showForm} clbk={this.addFood} handleDisplayForm={this.displayForm} />

        {/* affiche la searchBar et filtre */}
        <SearchBar clbk={this.handleSearch} />


        <div className="foods-and-todays">
          <div className="all-foods-list">
            {/* affiche tous les foods */}
            {
              this.state.allFoods.map((food, index) =>
                <FoodBox
                  key={index}
                  image={food.image}
                  name={food.name}
                  calories={food.calories}
                  quantity={food.quantity}
                  // 3) fonction onAdd déclarée ici fait appel à fonction handleAddFood (déclarée plus haut) avec paramètres implicites
                  // même syntaxe que onAdd={(a, b, c) => this.handleAddFood(a, b, c)} :
                  onAdd={this.handleAddFood}
                />
              )
            }
          </div>

          {/* affiche la list "Today's foods" à droite */}
          {/* add isVisible={this.state.showToday} */}
          <TodaysFoods foods={this.state.todaysFoods} />
        </div>

      </div >
    );
  }
}

export default App;
