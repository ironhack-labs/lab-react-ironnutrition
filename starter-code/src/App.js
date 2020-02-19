import React, { Component } from 'react';
import './App.css';

import foodsAll from './foods.json'
import FoodBox from './components/FoodBox';

class App extends Component {
  state={
    foods:[...foodsAll],
    foodsFilter:[...foodsAll],
    name:"",
    calories:'',
    image:'',
    new:false,
    busqueda:''
  }
  agrega=()=>{
    this.setState({new:true})
  }
  agregaPlato=(name,image,calories)=>{
    let food={name,image,calories,quantity:0}
    this.setState({foods:[...this.state.foods,food],
      foodsFilter:[...this.state.foodsFilter,food],
    name:"",calories:"",image:"",new:false})
  }

  handleChange=(e)=>{
    const {name,value}=e.target
    this.setState({[name]:value})
  }
  handleCounter=(e)=>{
    const {value,id}=e.target
    this.setState({foodsFilter:this.state.foodsFilter.map((food,i)=> (id.toString()===i.toString()) ? {...food,quantity:value}:food )})
    
  }
  busca=(e)=>{
    const {name,value}=e.target
    this.setState({[name]:value})
    this.setState({foodsFilter:[...this.state.foods.filter(food=>food.name.toLowerCase().startsWith(value.toLowerCase()))]})
  }
  render() {
    return (
      <div className="App">
      {this.state.new ? <section>
      <label>Name:</label> <input onChange={this.handleChange} name="name" value={this.state.name} />
      <br></br>
      <label>Calories:</label> <input onChange={this.handleChange} type="number" name="calories" value={this.state.calories} />
      <br></br>
      <label>Image URL:</label> <input onChange={this.handleChange} type="url" name="image" value={this.state.image} /> 
      <br></br>
      <button onClick={()=>this.agregaPlato(this.state.name,this.state.image,this.state.calories)}>Add</button>
      </section> : <button onClick={this.agrega}>Add new food</button>}
      <br></br>
      <br></br>
      <label>Search: </label>
      <input onChange={this.busca} type="search" name="busqueda" value={this.state.busqueda} /> 
      {this.state.foodsFilter.map((food,indx)=>
       <FoodBox key={indx}
       id={indx}
      name={food.name}
      calories={food.calories}
      image={food.image}
      quantity={food.quantity}
      handleCounter={this.handleCounter}
    />)}
      </div>
    );
  }
}

export default App;
