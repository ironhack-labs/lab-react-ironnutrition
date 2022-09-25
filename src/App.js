import React, { Component } from 'react'
import { Layout, Typography, Button, Row } from 'antd'
import './App.css';
import foodsJSON from './foods.json';
import FoodList from './components/FoodList/FoodList';
import { v4 as uuidv4 } from 'uuid';
import AddFoodForm from './components/AddFoodForm/AddFoodForm';


class App extends Component {

  state = {
    foodList: [...foodsJSON],
    searchText: '',
    showForm: true,
  }

  createDish = (dish) => {
    const dishToCreate = {
      ...dish,
      id: uuidv4() // paquete para generar un id, para que no nos salte el error de las keys de react
    }

    this.setState({ foodList: [dishToCreate, ...this.state.foodList] })
  }

  render() {
    const { foodList } = this.state
    
    return (
      <div className="App">
        <div>
          <h2>Create dish:</h2>
          <AddFoodForm createDish={this.createDish}/>
        </div>

        <h1>Food List: </h1>
        <FoodList foodList={foodList}/>
      </div>
    );
  }
}

export default App;


