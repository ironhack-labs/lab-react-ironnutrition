import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/foodBox/FoodBox';
import ShowAllProducts from './components/foodBox/ShowAllProducts'
import AddProducts from './components/foodBox/AddProducts';
import FilterProducts from './components/foodBox/FilterProducts';
import BoxInfo from './components/foodBox/BoxInfo';


class App extends Component {
  state = {
    foods : foods,
    add: true,
    filter: true,
    inCart : [],
    quantity : 0,
    totalCals : 0,
  }

  btnAddFood = (e) => {  //show or hide the component
    const {foods, add} = this.state
    this.setState({
      add : !add
    })
  }

  btnFilter = (e) => {
    const {filter} = this.state
    this.setState({
      filter : !filter
    })
  }

  addToCart = (e) => {
    // console.log(e)
    const product = e
    const {inCart} = this.state;
    // console.log("Added to the cart")
    const checkIfAlreadyExists = inCart.find(food =>{
      if(food.name === product.name){
        return true
      }
    })
    if(!checkIfAlreadyExists){
      this.setState({
        inCart : [...inCart, product]
      })
    }

  }

  deleteToCart = (product) => {
    const {inCart} = this.state;
    const index = inCart.findIndex(foods => {
      if(foods.name === product.name){
        return foods
      }
      });
    inCart.splice(index, 1)
    this.setState({
      inCart : inCart,
    })    
  }

  calculCalories(quantity, calories){
    const total = quantity*calories;
    return total
  }

  changeCals(total){
    console.log(total)
    return this.setState({
      totalCals : this.state.totalCals + total
    })
  }

  render() {
    const {foods, add, filter, inCart, totalCals} = this.state
    console.log(inCart)
    let sumCals = 0;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="content">
          <div className="components">

            <p className="margin-p">Filter products?</p>
            <button className="button is-success" onClick={this.btnFilter}>Filter</button>
            {!filter && <FilterProducts />}
            <hr/>

            <FoodBox food="Pizza" ingredients="true" func={this.addToCart} />
            <hr/>

            <p className="margin-p">Do you want add products?</p>
            <button className="button is-success" onClick={this.btnAddFood}>Add</button>
            {add && <AddProducts products={foods} addProduct={(product)=>{
              this.setState({
                foods:product, 
                add: !add
                })
              }}
            /> }
            <hr/>

            Complete list of the products:
            <ShowAllProducts food={foods} func={this.addToCart} />
          </div>

          <div className="cart">
            <h3>Today's food:</h3>
            <ul>
              {inCart.map((product, index) =>{ 
                let cals = this.calculCalories(product.quantity, product.calories)
                {/* this.changeCals(cals); */}
                sumCals = cals + sumCals
                return (
                  <li key={product.name} >{product.quantity} {product.name}: {cals} cals <button onClick={()=>this.deleteToCart(product)}>Delete</button></li>
                )  //como puedo utilizar luego los keys?
              })
              }
            </ul>
            <h4>Total of calories: {sumCals}</h4> 
          </div>
          </div>


      </div>
    );
  }
}

export default App;

// Tofu{
//   image: https://t2.uc.ltmcdn.com/images/3/1/8/img_como_hacer_tofu_casero_32813_600.jpg
// }