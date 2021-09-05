import React from 'react';
import FoodBox from "./components/FoodBox/FoodBox"
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import Form from './components/Form/Form';
import Search from './components/Search/Search';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      foods: foods.map(product => ({
      ...product
      })),
      search: "",
    } 
  }

  onAddItem = (product) => {
    this.setState({ foods: [
      ...this.state.foods,
      {
        ...product,
        id: uuidv4(),
        quantity: 0
      }
    ] })
  }

  onFilter = (value) => {
    this.setState({search: value})
  }


  render() {
    let filteredList = this.state.foods.filter(food => food.name.toLowerCase().includes(this.state.search.toLowerCase()))


    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        <Search onSearch={this.onFilter}/>
        {
          filteredList.map(foodItem => <FoodBox foodsArr={this.state.foods} food={foodItem.name} key={`${foodItem.name}-${foodItem.calories}`}/>)
        }
       
        <Form onAddProduct={this.onAddItem} />
      </div>
    );}
  }

export default App;
