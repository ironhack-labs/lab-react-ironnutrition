import React, { Component } from 'react';
import './App.css';
import FoodBox from './FoodBox';
import Search from './Search';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Modal from './Modal'
// import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      foodsList: foods,
      modalState: false
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }

  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <Search/>
        <a className="button is-primary" onClick={this.toggleModal}>
                Add New Item
              </a>
              <Modal 
              closeModal={this.toggleModal}
              foodList={this.state.foodsList} 
              modalState={this.state.modalState} 
              title="Add New Food"/>


        <FoodBox foodList = {this.state.foodsList}/>
        {/* <a class="button is-info is-focused" onClick={this.state.modalState}>Add item </a> */}
     
        
      </div>
    );
  }
}

export default App;
