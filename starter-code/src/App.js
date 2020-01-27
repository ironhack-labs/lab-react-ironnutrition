import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox'
import 'bulma/css/bulma.css';
import foods from './foods.json'
import Foodform from './components/FoodForm'

class App extends Component {
  constructor(){
    super();
    this.state={
      food: foods,
      form: false,
      searchString: ''
    }
  }

  showForm=()=>{
    this.setState({form: !this.state.form})
    
  }

  addFoodHandler = (theFood) => {
    const foodCopy = [...this.state.food];
    foodCopy.push(theFood);
    this.setState({
      food: foodCopy,
      form: !this.state.form
    })
  }

  
  searchFood=(event)=>{
    /* const value ist der in der Searchbar eingegebene Wert */
  const {value} = event.target
  console.log("value " +value)
  this.setState({searchString: value});


  }

  render() {

    /* Filter für die Searchbar, hier muss beachtet werden, dass immer gefiltert werden muss auch wenn nichts in die Searchbar eingetragen wird */
    const filteredFood= this.state.food.filter(oneFoodItem=>oneFoodItem.name.toLowerCase().includes(this.state.searchString.toLowerCase()))

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input type="text"  value={this.state.searchString} placeholder="Search Food ..." onChange={this.searchFood}/>
        
        {/* Button damit das showForm handler aufgerufen wird  */}
        <button onClick={this.showForm}>Add Food</button>

        {/* Wenn sich der Status form ändert, dann wird das Formular angezeigt oder nicht */}
        {this.state.form ? <Foodform addFood={this.addFoodHandler}/>: <p></p>}

        {/* Hier werden die einzelnen Elemente aus dem foods Array an FoodBox übergeben */}
       {filteredFood.map((oneFood,index)=>{
         return (<FoodBox key={index} {...oneFood} />)
       })
         
         
         }
        
      </div>
    );
  }
}

export default App;
