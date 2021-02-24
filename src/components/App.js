import './App.css';
import { Component } from 'react'

import FoodBox from './FoodBox'
import FoodForm from './FoodForm'
import Search from './Search'

import 'bulma/css/bulma.css';

import foods from '../foods.json';


class App extends Component {

  constructor() {
    super()
    this.state= {
      foods: foods,
      search: "",
    }
  }

  addFood(newFood) {
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(newFood)
    this.setState({foods: foodsCopy})
  }



  filterFoods(searchedFood) {
    this.setState({search: searchedFood}, () => {
      
      let search= this.state.search.trim().toLowerCase();
      if(search.length > 0) {
        this.setState({foods : foods.filter(elm => elm.name.toLowerCase().includes(search))})
      }
    })
  }

  render() {

    return (
      <>
      <Search searchFood={searchFood => this.filterFoods(searchFood)} />
      <FoodForm addFood={newFood => this.addFood(newFood)}/>
      {this.state.foods.map((elm, idx) => <FoodBox {...elm} key={idx} />)}
      </>
    );
  }
}

export default App;
