import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foods,
      addFoodForm: false,
      searchString: "",
      todaysFoods: {
        foods: [],
        calTotal: 0
      }
    }
    this.handleChangeEvent = this.handleChangeEvent.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.addFood = this.addFood.bind(this);
    this.showForm = this.showForm.bind(this);
  }

  handleChangeEvent(event) {
    let newString = event.target.value
    this.setState({
      searchString: newString
    }, this.handleSearch);
    // this.handleSearch();

    // estava chamando a função aqui ao invés de passar como cb em setState
    // até descobrir que setState é assíncrona
  }

  handleSearch() {
    if (this.state.searchString !== "") {
      let foodsArrayCopy = [...this.state.foods];
      let foodsArrayFilter = foodsArrayCopy.filter(food => food.name.toUpperCase().includes(this.state.searchString.toUpperCase()));
      console.log(foodsArrayFilter)
      this.setState({
        foods: foodsArrayFilter
      });
    } else {
      this.setState({
        foods: foods
      })
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
    let foodsArrayCopy = [...this.state.foods];
    foodsArrayCopy.push(newFood);
    // console.log(foodsArrayCopy)
    // console.log(this.state.foods)
    this.setState({
      foods: foodsArrayCopy,
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
    return (
      <div className="container">
        <div className="columns">
          <div className="column">
            <h1 className="title">IronNutrition</h1>
            <input type="text" name="search" onChange={this.handleChangeEvent} value={this.state.searchString}/>
            <button onClick={this.showForm}>Add Food</button>
            {this.state.addFoodForm && <AddFood addFoodMethod={this.addFood}/>}
            {
              this.state.foods.map((food, idx) => <FoodBox key={idx} {...food}/> )
            }
          </div>
          <div className="column">

          </div>
        </div>
      </div>
    );
  }
}

export default App;
