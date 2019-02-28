import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import 'bulma/css/bulma.css'
import foods from './foods.json'
import Foodbox from './components/Foodbox';
import Modal from './components/Modal'
import Search from './components/Search'

class App extends Component {

  state = {
    addClass: '',
    addBack: '',
    hide: 'is-hidden',
    close: 'modal-close is-large is-hidden',
    mod: false,
    food: foods,
    search: []
  }

  
  toggleModal = () => {
    if (this.state.mod === false) {
      this.setState ({
        addClass: 'modal is-active', 
        addBack: 'modal-background',
        hide: 'modal-content',
        close: 'modal-close is-large',
        mod: true
      })
    } else {
      this.setState ({
        addClass: '', 
        addBack: '',
        hide: 'modal-content is-hidden',
        close: 'modal-close is-large is-hidden',
        mod: false
      })
    }
   
  }

  addFoodHandler = indice => {
    const foodCopy = [...this.state.food]
    foodCopy.push(indice);
    this.setState({
      food: foodCopy
    })
    this.toggleModal();
  }

  searchFood = indice => {
    var nombres = [];
    
    this.state.food.forEach(element => {
      if(element.name.toLowerCase().indexOf(indice.toLowerCase(), 0) > -1) {
        nombres.push(element);
      }      
      this.setState ({
        search: nombres
      })
    });
   
    
  }

  
  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <hr/>
        <button className="button is-outlined is-info" onClick={this.toggleModal}>Add new food</button>
        <hr/>
        <Search search={this.searchFood}/>
        <br/>

        {
          this.state.search.map((food,index) => {
            return <Foodbox key={index} {...food}/>
          })
        }
        <Modal clickModal={this.state.addClass} backModal={this.state.addBack} content={this.state.hide} close={this.toggleModal} closeHide={this.state.close} addFood={this.addFoodHandler}/>
        
      </div>
    );
  }
}

export default App;
