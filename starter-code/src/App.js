import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/Foodbox';
import Button from './components/Button';
import Form from './components/Form';
import Search from './components/Search';

class App extends Component {

  state = {
    foodList: foods,
    formVisible: false,
  }

  toggleForm = () => {
    let { formVisible } = this.state;
    formVisible = !formVisible;

    this.setState({
      formVisible,
    })
  }

  handleSubmit = (newFood) => {
    const { foodList } = this.state;
    foodList.push(newFood);

    this.setState({
      foodList,
    })
  }

  handleSearch = (searchTerm) => {
    const { foodList } = this.state;
    // el search bar debe estar en el render pues sino al actualizar el estado voy a quedar solo
    // con lo que haya sid filtrado.
    foodList.filter(item => {
      return item.toString().includes(searchTerm)
    })
    
    this.setState({
      foodList,
    })
  }

  render() {
    const { formVisible } = this.state;

    return (
      <div className="App">
        {this.state.foodList.map((foodItem, index) => {
           return <FoodBox foodItem={foodItem} index={index} key={index}/>
        })}
        <Button onClick={this.toggleForm}/>
        {formVisible ? <Form onSubmit={this.handleSubmit}/> : null}
        <Search handleSearch={this.handleSearch}/>
      </div>
    );
  }
}

export default App;
