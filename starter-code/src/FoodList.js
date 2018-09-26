import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'
import FoodBox from './FoodBox';
import AddFood from './AddNew';
import todaysFoods from './TodaysFoods';
import TodaysFoods from './TodaysFoods';

class FoodList extends Component {
  constructor(props){
    super(props);
    this.state = { 
      foods: foods,
      showAddForm: false, 
      searchField: "",
      filtered: [],
      todaysFoods: [],
      total: 0,
    }
  }

  showEachFood () {

    this.state.filtered = this.state.foods.filter((theFood)=> {
      return theFood.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })

    return this.state.filtered.map((eachFood, index)=>{
      return (
          <FoodBox 
          key={index}
          name={eachFood.name}
          calories={eachFood.calories} 
          image={eachFood.image} 
          // quantity={eachFood.quantity}
          onClickFunc= {()=>this.addItem(index)} 
            />
    
       )
    })
  }

  addItem(item) {
    const newTodaysFoods = [...this.state.todaysFoods];
    newTodaysFoods.push(this.state.foods[item]);
    newTodaysFoods[newTodaysFoods.length-1].quantity++
    const uniqueArray = newTodaysFoods.filter((item, pos) => {
      if (newTodaysFoods.indexOf(item) === pos) {
        return item
      };
    })
    const newTotal = uniqueArray.reduce((subtotal, eachFood)=>{
      return subtotal + eachFood.calories*eachFood.quantity
    },0) 
    console.log(this.state.todaysFoods)
        this.setState({
          todaysFoods: uniqueArray,
          total: newTotal,
        })
  }
  toggleAddNewForm = () => {
    this.setState({showAddForm: !this.state.showAddForm})
  }

  addNewFood = (e, newThingToAdd) => {
    e.preventDefault();

    const newFood = {
      name: newThingToAdd.nameField,
      calories: newThingToAdd.caloriesField,
      image: newThingToAdd.imageField,
    };

    const allTheFoods = [...this.state.foods];
    // const allTheFoods = this.state.foods.slice()
    // either of these works, they each simply make a duplicate of this.state.foods
    allTheFoods.unshift(newFood);
    this.setState({foods: allTheFoods , showAddForm: !this.state.showAddForm})
  }
  // this function allows you to type and update the view
  searchFieldChange = (theEventObject) => {
    this.setState({searchField: theEventObject.target.value})
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">IronNutrition</h1>
        <div className="columns">
          <div className="column">
            <button className="button" onClick = {()=> this.toggleAddNewForm()}> Add new food</button>
            {this.state.showAddForm && <AddFood addNew = {this.addNewFood} /> }
            {this.state.todaysFoods.length >=1 && <TodaysFoods todaysFoods = {this.state.todaysFoods} total = {this.state.total} />}
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Search food item</label>
              <div className="control">
              <input type="search" className="input" placeholder="Search your food..." 
              onChange={(e)=> this.searchFieldChange(e)} value={this.state.searchField}
              />
              </div>
              <p className="help">start typing</p>
            </div>
            {this.showEachFood()}
          </div>
        </div>
      </div>
    );
  }
}

export default FoodList;
