import React, { Component } from 'react';
import './App.css';
import "bulma/css/bulma.css"
import foods from "./foods.json"

class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      foodsList: foods,
      search: "",
      newFood: "",
      newCals: 0,
      newImage: "https://i.imgur.com/DupGBz5.jpg",
      form: false,
      todays: {name: "", quantity: 0, calories: 0},
      todaysList: []
    }
  }

  searchBar = (e) =>{
    
    this.setState({
      [e.target.name]: e.target.value,
    },()=>{
      let tempList = [...foods]
      let finalList = tempList.filter(each => each.name.toLowerCase().includes(this.state.search.toLowerCase()))
      this.setState({
        foodsList: finalList
      })
    })
  }

  updateInput = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    }, ()=>{
      console.log(this.state)
    })
  }

  submitFood = (e) =>{
    e.preventDefault(); 

    let newList = this.state.foodsList;
    newList.unshift({
      name: this.state.newFood,
      calories: this.state.newCals,
      image: this.state.newImage,
      quantity: 0
    })
    this.setState({
      foodsList: newList,
      newFood: "",
      newCals: 0,
    },()=>{
      this.toggleForm()
    })
  }

  toggleForm = () =>{
    this.setState({
      form: !this.state.form
    },()=>{
      console.log(this.state.form)
    })
  }

  drawForm = () =>{
    console.log('running')
    if(this.state.form){
      return(
        <form onSubmit = {this.submitFood} className="foodForm">
              <h2>Food name</h2>
              <input type="text" value={this.state.newFood} className="foodBox" name="newFood" onChange = {this.updateInput} />

              <h2>Calories</h2>
              <input type="text" value={this.state.newCals} className="foodBox" name="newCals" onChange = {this.updateInput}/>

              <button className="formButton">Submit</button>
        </form>
      )
    }
  }

  addFood = (i, eachFood) =>{
    console.log(eachFood, i)
    let newArray = [...this.state.todaysList]
    if(newArray.indexOf(eachFood) < 0){
      newArray.push(eachFood)
    }
    this.setState({
      todaysList: newArray
    })
    console.log(this.state.todaysList)
  }

  updateValue = (eachFood, e) =>{
   eachFood.quantity = e.target.value;
   console.log(e.target.value, eachFood)

  }

  // setInput = (e, eachFood) => {
  //   // console.log(e.target.name, e.target.value)
  //   // eachFood.quanitity = e.target.value;
  //   // console.log(eachFood.quanitity)
  // }
  

  allFood = () =>{
    // console.log(this.state.foodsList)
    return this.state.foodsList.map((eachFood, i)=>{
      return (
        <div className="box" key={i}>
                  <article className="media">
                  <div className="media-left">
                      <figure className="image is-64x64">
                      <img src={eachFood.image}/>
                      </figure>
                  </div>
                  <div className="media-content">
                      <div className="content">
                      <p>
                          <strong>{eachFood.name}</strong> <br />
                          <small>{eachFood.calories} cal</small>
                      </p>
                      </div>
                  </div>
                  <div className="media-right">
                      <div className="field has-addons">
                      <div className="control">
                      <input type="number" className="input" name={eachFood.name} defaultValue="0" onChange={(e)=>{this.updateValue(eachFood, e)}}/>
                      </div>
                      <div className="control">
                          <button className="button is-info" name={eachFood.name} onClick={()=>{this.addFood(i, eachFood)}}>+</button>
                      </div>
                      </div>
                  </div>
                  </article>
              </div>
      )
    })
  }

  todaysFood = ()=>{
    console.log('helo')
    return this.state.todaysList.map((eachFood)=>{
      return(
        <li>{eachFood.quantity} {eachFood.name} = {eachFood.quantity * eachFood.calories} cals <button onClick={()=>{this.deleteIt(eachFood)}}>x</button></li>
      )
    })
  }

  deleteIt = (eachFood) =>{
    console.log('deleting')
    let newArray = [...this.state.todaysList]
    let index = newArray.indexOf(eachFood)
    console.log(index)
    newArray.splice(index, 1)
    this.setState({
      todaysList: newArray
    })
  }

  render() {
    return (
      <div className="App">
      <div>
        <h1 className="nutr">IronNutrition</h1>
      </div>
      <div className="right foodDiv">
      <button onClick={this.toggleForm} className="formButton">Add Food</button>
        {this.drawForm()}
      </div>
      <div className="left">
        <input type="text" value={this.state.search} className="searchFood" name="search" onChange = {this.searchBar} placeholder="Search Foods" />
        <div>
        <h1>Today's Foods</h1>
        <ul>
          {this.todaysFood()}
        </ul>
        </div>
        {this.allFood()}
      </div>
      </div>
    );
  }
}

export default App;
