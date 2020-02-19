import React, { Component } from 'react';
import './App.css';

import foodsAll from './foods.json'

class App extends Component {
  state={
    foods:[...foodsAll],
    name:"",
    calories:'',
    image:'',
    new:false
  }
  agrega=()=>{
    this.setState({new:true})
  }
  agregaPlato=(name,image,calories)=>{
    let food={name,image,calories,quantity:0}
    this.setState({foods:[...this.state.foods,food],
    name:"",calories:"",image:"",new:false})
  }

  handleChange=(e)=>{
    const {name,value}=e.target
    this.setState({[name]:value})
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
      {this.state.foods.map((food,indx)=>
       <div className="box" key={indx}>
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} alt={food.name}/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={food.quantity}
          />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>)}
      </div>
    );
  }
}

export default App;
