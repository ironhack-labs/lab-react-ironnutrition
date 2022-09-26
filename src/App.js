import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.min.css';
import foodsJSON from './foods.json';
import FoodsList from './components/FoodsList/FoodsList';
import FoodForm from './components/FoodForm/FoodForm';
import { v4 as uuidv4 } from 'uuid';
import { Layout, Typography, Button  } from 'antd';

const { Content } = Layout
const { Title } = Typography

class App extends Component {
  state = {
    foods : [...foodsJSON],
    searchText: '',
    showForm: true,
  }

  createFood = (food) => {
    const foodToCreate = {
      ...food,
      id : uuidv4()
    }

    this.setState({ foods : [foodToCreate, ...this.state.foods] })
  }

  handleSearch = (event) => {
    const { value } = event.target

    this.setState( { searchText: value})
  }

  getFoodsToRender = () => {
    const { foods, searchText } = this.state

    if (searchText) { 
      return foods.filter(food => {
        return food.name.toLowerCase().includes(searchText.toLowerCase())
        || food.calories.toLowerCase().includes(searchText.toLowerCase())
      })
    }
    return foods
  }

  onDeleteFood = (id) => {
    this.setState(prevState => ({
      foods: prevState.foods.filter(food => food.id !== id)
    }))
  }

  toggleShowForm = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm}))
  }
  
  render() {
    const { searchText, showForm } = this.state
    const foods = this.getFoodsToRender()

    return(
      <div className='App'>
        <Layout>
          <div style={{marginTop: '5rem'}}>
          <Content style={{ padding: '0 50px', minHeight: '100vh',}}>
            <label htmlFor='search'> Search: </label>
            <input id='search' name='search' value={searchText} onChange={this.handleSearch} />

            {showForm && (
              <FoodForm  createFood={this.createFood} />
            )}

              <Button onClick={this.toggleShowForm}>
                {showForm ? 'Hide' : 'Show'} form
              </Button>

              <Title>Foods List</Title>

              <FoodsList foods={foods} onDeleteFood={this.onDeleteFood}/>
          </Content>
          </div>
        </Layout>
      </div>
    )
  }
}

export default App;
