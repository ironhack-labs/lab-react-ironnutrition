import React, { Component } from 'react';
import { Divider, Button, Row, Col } from 'antd';
import foodsJSON from './foods.json';
import { v4 as uuidv4 } from 'uuid';

import './App.css';

import FoodForm from './components/FoodForm/FoodForm';
import FoodList from './components/FoodList/FoodList';
import Search from './components/Search/Search';
// import AddFoodForm from './components/AddFoodForm/AddFoodForm';

class App extends Component {

  state = {
    foods: [...foodsJSON],
    showForm: true,
  }

  createFood = (food) => {
    const foodToCreate = {
      ...food,
      id: uuidv4(),
    }
    this.setState({foods: [foodToCreate, ...this.state.foods]});
  }

  deleteFood = (name) => {
    this.setState(prevState => {
      return (
        {
          foods: prevState.foods.filter(food => food.name !== name)      
        }
      )
    })
  }

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({ textToSearch: value });
  }

  getFoodsToRender = () => {
    const { foods, textToSearch } = this.state;

    if (textToSearch) { 
      return foods.filter((food) => {
        return food.name.toLowerCase().includes(textToSearch.toLowerCase())
      })
    }
    return foods;
  }

  toggleShowForm = () => {
    this.setState(prevState => ({
      showForm: !prevState.showForm
    }))
  }

  render() {
    const {textToSearch, showForm} = this.state;

    const foods = this.getFoodsToRender();

    return (
      <div className="App">

        
          <Row justify="center">
           <Col span={6}>
            {showForm && (
            <FoodForm createFood={this.createFood} />
            )}
            <Button onClick={this.toggleShowForm} className='button-margin'>
              {showForm ? 'Hide' : 'Show'} form 
            </Button>
            <Search value={textToSearch} onChange={this.handleSearch} />
           </Col>
         </Row>
         
        
        
        

        <Divider>Food List</Divider>
        <FoodList foods = {foods} deleteFood={this.deleteFood}  />
      </div>
    )
  }

}

export default App;