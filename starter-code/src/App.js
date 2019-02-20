import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodCard from './FoodCard';
import MyButton from './MyButton';
import Forms from './Forms';
import './forms.css';
import Search from "./Search"



class App extends Component {

  state = {
    food: foods,
    displayforms: false
  }

  displayForm = () => {
      let cloneState = {...this.state};

      if (this.state.displayforms) 
        cloneState.displayforms = false
      else 
        cloneState.displayforms = true
      this.setState(cloneState)
  }

  handlerSubmit = (e,newState) => {
    
    e.preventDefault()

    let cloneState = {...this.state};
    cloneState.food.push(newState)
    cloneState.displayforms=false

    this.setState(cloneState)
  }

  handlerFilter = (e,newState) => {
    //console.log(e.target.value)
    let cloneState = {...this.state};
    let pepep= cloneState.food.filter((data) => {
      return data.name.toLowerCase().includes(e.target.value.toLowerCase())
    } )
    this.setState({food:pepep})
    

  }

  render() {
    //console.log('el estado es', this.state.displayforms)
    return (
      <div className="App">

      <br></br>
       <MyButton action={this.displayForm} text="Add food Forma" />
        
        {this.state.displayforms ? <Forms   pepito={this.handlerSubmit} classtype="displayForm" /> : <Forms classtype="nodisplayForm" />}
        <Search busqueda={this.handlerFilter}/>
        {this.state.food.map((food,index) => 
          <FoodCard datos={food} key={index}/>)}
        
      </div>
    );
  }
}

export default App;
