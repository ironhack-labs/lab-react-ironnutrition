import React, { Component } from 'react';
import './App.css';
import FoodBox from './FoodBox';
// import Search from './Search';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import Modal from './Modal'
// import logo from './logo.svg';


class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      foodsList: foods,
      showFoods: foods,
      modalState: false
    };
    
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  addTheFoodToFoodBoxes = (food) => { 
    let newShowFoods = [...this.state.showFoods] //copy foods 
    newShowFoods.unshift(food) //add food to the beginning 
    this.setState({  //add new foods 
      showFoods:newShowFoods,
      allFoods: newShowFoods,
      show: false
    })
    
  }
 

  addFoodItem = (food) => {
    let newShowFoods = [...this.state.foodsList]
    newShowFoods.unshift(food)
    this.setState({
      showFoods: newShowFoods
    })
    
  }

  // addToList = (food) => {
  //   console.log(food)
  //   let copyOfListOfFoods = { ...this.state.listOfFoods }
  //   copyOfListOfFoods[ food.name ] = food
  //   this.setState({
  //     listOfFoods:copyOfListOfFoods
  //   })
  // }

  toggleModal() {    
    this.setState((prev, props) => {
      const newState = !prev.modalState;
      
      return { modalState: newState };
    });
  }

  search = (e) => {
    let filteredData = this.state.foodsList.filter(eachItem => {
      return eachItem.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    this.setState({
      filteredData: filteredData
    })
  }


  render() {
    return (
      <div className="App">
        <h1>IronNutrition</h1>
        <div class="field is-grouped">
                <p class="control is-expanded">
                <input class="input" type="text" placeholder="Search Food" onChange={this.search}/>
                </p>
                <a className="button is-primary" onClick={this.toggleModal}>
          Add New Item
        </a>
        <Modal 
        closeModal={this.toggleModal}
        foodList={this.state.foodsList} 
        modalState={this.state.modalState} 
        title="Add New Food"/>
                {/* <p class="control">
                <a class="button is-info">
                    Search
                </a>
                </p> */}
          </div>
        


        <FoodBox foodList = {this.state.showFoods} />
     
        
      </div>
    );
  }
}

export default App;
