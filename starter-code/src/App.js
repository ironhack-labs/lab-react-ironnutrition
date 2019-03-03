import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import Foodbox from './components/Foodbox'
import foods from './foods.json'

const foodList = [...foods]

class App extends Component {
  state = {
    foodList: foodList,
    displayForm: false,
    newFood: ["Undefined food item","0","https://i.imgur.com/eTmWoAN.png"],
    search: ""
  }

  showForm = () => {
    let newState = !this.state.displayForm;
    this.setState({
      displayForm: newState,
    })
  }

  newFoodHandler = (e) =>{
    let field = e.target.name
    let value = e.target.value
    let temp = this.state.newFood.slice()
    if (field === "name") temp[0] = value 
    if (field === "calories") temp[1] = value 
    if (field === "image") temp[2] = value 
    this.setState({
      newFood: temp
    })
  }

  addFood = (name, calories, image) => {
    let newFood = {
      name: name,
      calories: calories,
      image: image,
    }
    let newList = this.state.foodList.slice()
    newList.unshift(newFood)
    this.setState({
      foodList: newList
    })
  }

  searchHandler = (e) =>{
    let searchTerm = e.target.value;
    console.log(e.target.value)
    let newList = searchTerm.length > 0 ? foods.slice().filter(el=>el.name.includes(searchTerm)) : foods.slice()
    this.setState({
      foodList: newList
    })
  }
  

  render() {
    return (
      <div className="App">
        <div className="search">
          <label htmlFor="search">Search</label>
          <input className="input" onChange={(e)=>this.searchHandler(e)}type="text" name="search" placeholder="Type your search here..." />
        </div>
        <section className="display">
        <div className="foodList">
          {this.state.foodList.map((food,i)=><Foodbox key={i} {...food}/>)}
        </div>
        <button onClick={this.showForm} className="button is-primary">Add new food</button>
        <div className = "form">
          {this.state.displayForm ? <div className="control"><input className="input" value={this.state.foodName} onChange={(e) =>this.newFoodHandler(e)}  type="text" name = "name" placeholder="Name" /></div> : <br />}
          {this.state.displayForm ? <div className="control"><input className="input" value={this.state.foodCalories} onChange={(e) =>this.newFoodHandler(e)}  type="text" name="calories" placeholder="Calories" /></div> : <br />}
          {this.state.displayForm ? <div className="control"><input className="input" value={this.state.foodImage} onChange={(e) =>this.newFoodHandler(e)}  type="text" name= "image" placeholder="Image url" /></div> : <br />}
          {this.state.displayForm ? <button onClick={()=>this.addFood(...this.state.newFood)} className="button is-primary">Upload food data</button> : <br/>}
        </div>
        </section>
      </div>
    );
  }
}

export default App;
