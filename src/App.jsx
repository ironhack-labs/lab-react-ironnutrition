import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import foods from './foods.json';
import './App.css';
import FoodBox from './components/FoodBox';
import Modal from './components/Modal';
import SearchBar from './components/SearchBar';
import TodaysFood from './components/TodaysFood';

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      foods,
      displayedModal: false,
      foodList: [],
      foodFilter: []
    }

    this.foodsRef = this.state.foods
    this.toggleModal = this.toggleModal.bind(this)
    this.addFood = this.addFood.bind(this)
    this.filterFood = this.filterFood.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  addToCart(value){
    const foodListCopy = [...this.state.foodList]
    if(foodListCopy.filter(f => f.name === value.name).length){
      const index = foodListCopy.findIndex(f => f.name === value.name)
      console.log(index)
      foodListCopy[index].quantity = +foodListCopy[index].quantity + +value.quantity
    }
    else{
      foodListCopy.push(value) 
    }
    this.setState({foodList: foodListCopy})
  }

  filterFood(value){
    this.setState({foods: this.foodsRef.filter(f => f.name.toLowerCase().includes(value.toLowerCase()))})
  }

  addFood(form){
    const foodsCopy = [...this.state.foods]
    foodsCopy.push(form)
    this.setState({foods: foodsCopy} )
  }

  //! ISSUE when add new food : it's not in the search possibilities, it appears when filter is active on another food 
  // componentDidUpdate(prevState,prevProps){

  //   if(prevState.foods !== this.state.foods){
  //     this.foodsRef = this.state.foods;
  //   }

  // }

  toggleModal(){
    this.setState({displayedModal: !this.state.displayedModal})
    document.querySelector('html').classList.toggle('is-clipped')
  }

  render() {
    return (
      <div style={{margin: 50, width: 800}}>
        <h1 className='title'>Nutrition App</h1>
          <button className="button is-primary" onClick={this.toggleModal}>Add food</button>
          <SearchBar filterFood={this.filterFood}/>
          {this.state.displayedModal && <Modal toggleModal={this.toggleModal} addFood={this.addFood}/>}
          <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-evenly', alignItems: 'flex-start'}}>
            <div className="foodBoxes-wrapper">
              {this.state.foods.map((food, i) => <FoodBox key={i} {...food} addToCart={this.addToCart}/>)}
            </div> 
            <TodaysFood foodList={this.state.foodList}/>
          </div>
      </div>
    )
  }
}

export default App;
