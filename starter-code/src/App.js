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
    searchTerm: '',
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
    this.toggleForm();

    this.setState({
      foodList,
    })
  }

  handleSearch = (searchTerm) => {
    // el search bar debe estar en el render pues sino al actualizar el estado voy a quedar solo
    // con lo que haya sid filtrado.
    this.setState({
      searchTerm: searchTerm,
    }) 
  }

  filterList = (searchTerm, foodList) => {
    return foodList.filter(item => {
      return item.name.toLowerCase().includes(searchTerm)
    })
  }

  render() {
    const { formVisible, foodList, searchTerm } = this.state;
    const filteredFoodList = this.filterList(searchTerm, foodList);


    return (
      <div className="App flex-container">
        <Search handleSearch={this.handleSearch}/>
        <div className=" main-content ">
          <div className=" foodlist ">
            {filteredFoodList.map((foodItem, index) => {
              return <FoodBox foodItem={foodItem} index={index} key={index}/>
            })}
          </div>
          <div className="form-container">
            <Button onClick={this.toggleForm}/>
            {formVisible ? <Form className=" form " onSubmit={this.handleSubmit}/> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
