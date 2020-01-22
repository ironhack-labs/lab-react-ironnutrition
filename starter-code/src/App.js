import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import AddFood from './components/AddFood'
import FoodBoxContainer from './components/FoodBoxContainer.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      allFoods: foods,
      addFoodForm: false,
      todaysFoods: {
        foods: [],
        calTotal: 0
      }
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.addFood = this.addFood.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleSearch(event) {
    let searchString = event.target.value;
    let currentList = [];
    let newList = [];

    if (searchString !== "") {
      currentList = [...this.state.foods];
      newList = currentList.filter(food => food.name.toUpperCase().includes(searchString.toUpperCase()));
      this.setState({
        foods: newList
      }, function(){console.log(this.state.foods)});
    } else {
      newList = this.state.allFoods;
      this.setState({
        foods: newList
      }, function(){console.log(this.state.foods)}
    )
      // como é a melhor forma de resetar a busca e manter os itens adicionados pelo usuário?
    }
  }

  addFood(object) {
    let newFood = {
      name: object.name,
      calories: parseInt(object.calories),
      image: object.image,
      quantity: 1
    }

    let copyAllFoods = [...this.state.allFoods];
    copyAllFoods.push(newFood);
    // console.log(foodsArrayCopy)
    // console.log(this.state.foods)
    this.setState({
      foods: copyAllFoods,
      allFoods: copyAllFoods,
      addFoodForm: !this.state.addFoodForm
    })
    // console.log(this.state.foods)

    // esses console.logs comentados sou eu descobrindo que this.state.foods permanece igual
    // após this.SetState() e não consigo entender o porquê.
    
    // na linha 37 estou usando push e aparece um novo FoodBox no final,
    // mesmo sem haver mudanças em this.state.foods.
    // estava tentando usar unshift e não estava dando certo
  }

  showForm() {
    this.setState({
      addFoodForm: !this.state.addFoodForm
    })
  }

  render() {
    let foodsArray = this.state.foods;
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">IronNutrition</h1>
            <input type="text" name="search" onChange={this.handleSearch}/>
            <button onClick={this.showForm}>Add Food</button>
            {this.state.addFoodForm && <AddFood addFoodMethod={this.addFood}/>}
            <FoodBoxContainer foods={this.state.foods} />
          </div>
          <div className="column">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
