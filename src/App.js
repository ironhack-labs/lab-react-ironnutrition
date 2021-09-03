import React from 'react';
import FoodBox from "./components/FoodBox/FoodBox"
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json';
import Form from './components/Form/Form';

class App extends React.Component{
  constructor (props) {
    super(props);

    this.state = {
      foods: foods.map(product => ({
      ...product
      }))
    } 
  }

  onAddItem = (product) => {
    this.setState({ products: [
      ...this.state.products,
      {
        ...product,
        id: uuidv4(),
        quantity: 0
      }
    ] })
  }


  render() {
    return (
      <div className="App">
        <h1>Iron Nutrition</h1>
        {this.state.foods.map(foodItem => <FoodBox food={foodItem.name} key={`${foodItem.name}-${foodItem.calories}`}/>)}
        <Form onAddProduct={this.onAddItem} />
      </div>
    );}
  }

export default App;
