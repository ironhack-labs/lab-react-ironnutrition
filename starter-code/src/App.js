import React, { Component } from 'react';
import foods from './foods.json';
import FormFood from './components/FormFood';
import Search from './components/Search.js';
import ListFoodBox from './components/ListFoodBox.js';
import './App.css';

class App extends Component {
  state = {
    foods: foods,
    showForm:false,
    text:''
  }
  showForm = () => {
    this.setState({
      showForm:!this.state.showForm
    })
  }

  addFood = (newFood) => {
    const copyFoods = this.state.foods
    copyFoods.push(newFood);
    this.setState({
      foods:copyFoods
    })
    this.showForm()
  }

  searchText = (text) => {
    const copyFoods = foods;
    this.setState({
      foods:copyFoods.filter(eachElement => eachElement.name.toLowerCase().includes(text.toLowerCase())),
      text:text
    })
  }

  render() {
    const {showForm} = this.state
    return (
      <div className="App">
        <div className="container">
          <Search searchText ={this.searchText} textState = {this.state.text}/>
          <ListFoodBox foods = {this.state.foods} />
          <button className="button is-link" onClick={this.showForm} >
          {
          showForm ? 'Close button' : 'Add new food'
          }
          </button>
          {showForm ? <FormFood addFood = {this.addFood} />: ''}
          <a href="#bottom"><span id="bottom"></span></a>
        </div> 
      </div>
    );
  }
}

export default App;

//no entiendo porqué copiar el array funciona y el otro no...

// showForm = () => {
//   this.setState({
//     showForm:!this.state.showForm
//   })
// }


// FILTRADO:
/*
Tiene que filtrarse un objeto que cuando se guarde mantenga sus propiedades:
- ya sean props que vengan de otro archivo
- ya sea una copia del estado

de lo contrario, al guardar el estado directamente del estado, sobreescribe a 0 o a un numero X
de elementos que no se recuperan
*/