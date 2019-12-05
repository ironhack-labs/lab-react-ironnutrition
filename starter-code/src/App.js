import React, { Component } from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';



class App extends Component {
  state = {
    foods,
    duplicated: foods,
    show: false,
    btnAdd: "Add new food",
    form: {
      name: '',
      calories: '',
      image: '',
      quantity: 0
    },
    addedFoods: [],
    filteredAdd: [],
    totalCal: 0
  }

  searchQuery = (e) => {
    const  { foods } = this.state
    const query = new RegExp(e.target.value, 'gi')
    if (e.target.value === "") {
      this.setState({
        foods: this.state.duplicated
      })
    } else {
      const filtered = foods.filter((food) => food.name.match(query) )
      this.setState({
        foods: filtered
      })
    }
  }

  handleInput = e => {
    const {
      form
    } = this.state
    const key = e.target.name
    form[key] = e.target.value
    this.setState({ form })
  }

  showForm =()=>{
    const {show, btnAdd} = this.state
    this.setState({
      show: !show,
      btnAdd: btnAdd === "Add new food" ? "Cancel" : "Add new food"
    })
  }

  addSomeFood = () => {
    const {foods, form} = this.state
    this.setState({
      foods: [form, ...foods],
      duplicated: [form, ...foods],
      form: {
        name: '',
        calories: '',
        image: '',
      }
    })
    this.showForm()
  }

  handleQuantity = (e, name) => {
    const { value } = e.target
    const foodIdx = this.state.foods.findIndex(food => food.name === name)
    this.setState(prevState => {
      return {
        ...prevState,
        foods: [
          ...prevState.foods,
          [prevState.foods[foodIdx]["quantity"]] = value
        ],
      }
    })
  }

  showAdded = (name) => {
    const { addedFoods } = this.state
    const toAdd = this.state.foods.find(food => food.name === name)
    this.setState(prevState => {
      return {
        ...prevState,
        addedFoods: [
          ...addedFoods,
          { ...toAdd }
        ],

        totalCal: this.state.addedFoods.reduce((acc, food) => acc + (food.calories * food.quantity), toAdd.calories * toAdd.quantity) 
      }
    })
  }


  render() {
    const {form} = this.state
    const {name, calories, image} = form
    return (
      <div className="App">

        <div className="control">
          <input value={this.state.query} onChange={this.searchQuery} className="input is-medium" type="text" placeholder="Search"/>
        </div>
        <br/>
        <div className="main-wrapper">
          <div className="left-content" >
          <button className="button is-primary is-fullwidth" onClick={this.showForm}>{this.state.btnAdd}</button>
          <br/>
          {this.state.foods.map((food, idx)=>
            <FoodBox key={idx} food={food} addToday={this.showAdded} handleQuantity={this.handleQuantity}/>
          )}
        
          </div>
          <div className="right-content">

            {!this.state.show && <div className="todays-food">
              <h2>Todays Food</h2>
              {this.state.addedFoods.map(add => {
                return (
                <div>
                  <p>{add.quantity} {add.name} {add.quantity * add.calories} cals</p>
                </div>                  
              )})
              }
              {this.state.totalCal !== 0 && <p>{this.state.totalCal} cals</p>}
            </div>}

            {this.state.show && <AddFoodForm 
            handleInput={this.handleInput} 
            name={name}
            calories={calories}
            image={image}
            addSomeFood={this.addSomeFood}
            />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
