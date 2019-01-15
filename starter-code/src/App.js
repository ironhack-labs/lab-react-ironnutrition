import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json'
import { FoodBox } from './components/FoodBox';
import { Modal } from './components/Modal';
import { Button } from './components/Button';
import { InputField } from './components/InputField';
import { SearchBar } from './components/SearchBar';
import { FoodList } from './components/FoodList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foods: [
        ...foods
      ],
      modalOpen: false,
      querySearch: '',
      foodListItems: []
    }
  }
  showModal() {
    this.setState({modalOpen: true})
  }

  searchFood(query) {
    const results = foods.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
    this.setState({foods: results});
  }
  addItemToList(item) {
    this.setState({foodListItems: this.state.foodListItems.push(this.state.foods[item])});
    console.log(this.state.foodListItems);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title ">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <div className="container">
            <h1 className="is-size-3">IronNutrition</h1>
            <SearchBar handleSearchBarChange={ query => this.searchFood(query)}/>
            <div className="columns">
              <div className="column">
                {this.state.foods.map((f, i) => (
                  <FoodBox food={f} index={i} handleAddFood={e => this.addItemToList(e)}/> 
                ))}
                
                
              </div>
              <div className="column has-text-left">
                <h2 className="is-size-3">Today's foods</h2>
                <FoodList listItems={this.state.foodListItems}/>
              </div>
            </div>
            <Modal isActive={this.state.modalOpen} title="Add food">
                  <InputField label="Name" placeholder="Write the name"/>
                  <InputField label="Calories" placeholder="Write the number of calories"/>
                  <InputField label="Image" placeholder="Write the URL of the image"/>
            </Modal>
            <Button text="Add food" className="is-danger" showModal={() => this.showModal()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
