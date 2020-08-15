import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import FoodBox from './components/FoodBox'
import AddFood from './components/AddFood'
import Search from './components/Search'
import foods from './foods.json';

class App extends Component {
  state = {
    Food: foods,
    filtered: foods,
    isClicked: false,
    searchTerm: '',
    calculatedFoods: []
  }
  
  dynamicSearch = (searchTerm) => {
    const filtered = this.state.Food.filter(food => {
      console.log(food.name)
      return food.name.toLowerCase().includes(searchTerm.toLowerCase())
    });
    this.setState({
      filtered
    })
  }

  showForm = () => {
    this.setState({isClicked: !this.state.isClicked})
  }

  insertFood = (newFood) => {
    const copyFood = [...this.state.filtered]
    copyFood.push(newFood)
    this.setState({filtered: copyFood, isClicked: false})
  }

  addNewFood = (foodToAddObj) => {
    console.log('foodToAddObj', foodToAddObj)
    const calculatedFoodsCopy = [...this.state.calculatedFoods];

    if (calculatedFoodsCopy.length === 0) { // si el array de calculatedFoods es vacío
      calculatedFoodsCopy.push(foodToAddObj);
      this.setState({ calculatedFoods: calculatedFoodsCopy }); // actualiza el `state`
    }
    else { // si el array de calculatedFoods ya tiene algunas comidas añadidas
      let foundFood = false; // la variable indicadora

      const updatedCalculatedFoods = calculatedFoodsCopy.map((addedFoodObj) => {
        // si la comida ya existe, actualiza el objeto
        if (addedFoodObj.name === foodToAddObj.name) {
          addedFoodObj.quantity += foodToAddObj.quantity;
          foundFood = true; // cambiamos la variable indicadora a true, porque hemos encontrado y actualizado la comida 
        }
        return addedFoodObj;
      })

      if (!foundFood) {
        // si comida con este nombre ya no existe en calculatedFoods, 
        // si no la hemos encontrado durante de iteracion con el calculatedFoodsCopy.map
        // añade la comida al array
        console.log('HERE',)
        console.log('foundFood', foundFood)
        console.log('foodToAddObj **', foodToAddObj)

        updatedCalculatedFoods.push(foodToAddObj);
        console.log('after push', updatedCalculatedFoods)

      }

      this.setState({ calculatedFoods: updatedCalculatedFoods }); // actualiza el `state`
    }
  }


  render() {
    return (
    <div className="App">
      <h1>IronNutrition</h1>
      <div>
        {this.state.isClicked ?<AddFood addFood={this.insertFood}/>:null}
        <button onClick={this.showForm} className="btn">Add Food</button> 
      </div>
      <Search filterFood={this.dynamicSearch} />
      {this.state.filtered.map((food, index) => (
      <FoodBox food={food} key={index} addNewFood={this.addNewFood} />))}
      {
        this.state.calculatedFoods.map((addedFoodObj, i) => {
          const totalCalories = addedFoodObj.calories * addedFoodObj.quantity;
          return <p key={i} > {addedFoodObj.quantity} {addedFoodObj.name} {totalCalories}kcal</p>
        })
      }
    </div>
  );
  }
  
}

export default App;
