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
    total:0,
    inputs: {
      name: '',
      calories: 0,
      image: '',
      quantity:0
    },
    todayFood:[],
    search:'',
    showSearch: 'false',
    searchArr: {}
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

//Busqueda---------------------------------------------------------------
handleSearch=(e)=>{
  let find='false'
  let {_, value} = e.target
  this.setState({search:value})
  this.state.food.map(el => {
    if(el.name === value) {
     this.setState({searchArr: el})

     find='true'
    }})
  this.setState({showSearch: find})
}

//Add food-----------------------------------------------------------------
addList = (name, calories, quantity) => {
//console.log('Se ejecuta'+name+calories+quantity)

const obj={
  name:name,
  calories:calories,
  quantity:quantity
}
  //let selected = {name, cal, quantity}
this.setState({todayFood: [...this.state.todayFood, obj]})

//sacamos el total
let totCal=obj.calories*obj.quantity;
this.state.todayFood.map(el => (totCal += el.calories*el.quantity))
this.setState({total:totCal})
console.log(this.state.todayFood)
}


  render() {
    let {name, calories, image,quantity} = this.state.inputs
    
    return (
      
      <div className="App">
      <div style={{width:'75%'}}>
<h2>Buscar Platillo</h2>
      <input    onChange={this.handleSearch}
                type="text"
                name="search"
                placeholder="type here..."
                value={this.state.search}
                style={{margin:'25px'}}
      ></input>

      {this.state.showSearch==='true' ? (
        <FoodBox name={this.state.searchArr.name} calories={this.state.searchArr.calories} quantity={quantity} image={this.state.searchArr.image} key={this.state.searchArr.index} handle={this.handleInputs} addToList={this.addList}/>
      )

      : (this.state.food.map((el, index) => (
        <FoodBox name={el.name} calories={el.calories} image={el.image} quantity={quantity} key={index} handle={this.handleInputs} addToList={this.addList}/>
      )))}
      <button className="addNewDish" onClick={this.NewFood}>Add new Dish</button>
      {this.state.nF?<Form name={name} cal={calories} img={image} handle={this.handleInputs} AddFood={this.AddNew}/>:null}
     
      </div>

      <div style={{width:'25%',display:'flex',flexDirection:'column'}}>
      <h1 style={{width:'100%',textAlign:'center'}}
      >Today's Food</h1>
      <ul>
        {this.state.todayFood.map(el => (
          <li>{el.quantity} {el.name} = {Number(el.quantity)*Number(el.calories)} calories</li>
        ))}
      </ul>
      <br></br>
       <p>Total= {this.state.total} calories</p>
      </div>
      </div>
    );
  }
}

export default App;
