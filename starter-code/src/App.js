import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { FoodBox } from './components/FoodBox';
import foods from './foods.json'
import {Form} from './components/Form';

class App extends Component {
  state={
    food:foods,
    nF:false,
    inputs: {
      name: '',
      calories: 0,
      image: '',
      quantity:0
    },
    todayFood:[],
    search:'',
    showSearch: false,
    searchArr: []


  }

  handleInputs = e => {
    let {name, value} = e.target
    this.setState(prev => {
      return {
        ...prev,
        inputs: {
          ...prev.inputs,
          [name]: value
        }
      }
    })
  }

  NewFood=()=>{
    this.setState({nF:!this.state.nF})      
  }

  AddNew=()=>{
    
    this.setState({food:[...this.state.food, this.state.inputs]})
  }

handleSearch=(e)=>{
  let {search, value} = e.target
  this.setState({search:value})
  this.state.food.map(el => {
    if(el.name === this.state.search) {
     this.setState({searchArr: [...this.state.searchArr, el]})
     this.setState({showSearch: true})
  }
  })
}

addToList = (name, cal, quantity) => {
  let selected = {name, cal, quantity}
  this.setState({todayFood: [...this.state.todayFood, selected]})
}



  render() {
    let {name, calories, image} = this.state.inputs
    let totCal = 0
    return (
      <div className="App">
      <div style={{width:'50%'}}>

      <input onChange={this.handleSearch}
                type="text"
                name="search"
                placeholder="type here..."
                value={this.state.search}
                
      ></input>

{console.log(this.state.search)}
{console.log(this.state.searchArr)}
{console.log(this.state.showSearch)}
      {this.state.showSearch ? (this.state.searchArr.map((el, index) => (
        <FoodBox name={el.name} calories={el.calories} image={el.image} key={index} handle={this.handleInputs} addToList={this.addList}/>
        

      ))) : (this.state.food.map((el, index) => (
        <FoodBox name={el.name} calories={el.calories} image={el.image} quantity={el.quantity} key={index} handle={this.handleInputs} addToList={this.addList}/>
      )))}
      
      {this.state.nF?<Form name={name} cal={calories} img={image}  handle={this.handleInputs} AddFood={this.AddNew}/>:null}
      <button onClick={this.NewFood}>Pushhh me pls</button>
      </div>

      <div style={{width:'50%'}}></div>
      <h1 style={{width:'100%',textAlign:'center'}}
      >Today's Food</h1>
      <ul>
        {this.state.todayFood.map(el => (
          <li>{el.quantity} {el.name} = {Number(el.quantity)*Number(el.calories)}</li>
        ))}
      </ul>
      <p>Total:{this.state.todayFood.map(el => {totCal += el.calories*el.quantity})}</p>

      </div>
    );
  }
}

export default App;
