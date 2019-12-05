import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import Search from './components/Search';

class App extends Component {
  state = {
    foodsArray : foods,
    formAppear: false,
    form: {
      image : "",
      name : "",
      calories : "",
      quantity : 0
    },
    filtedFoods: [],
    totalCalories: 0,
    addedFoods: []
  }

  handleInput = (e) => {
    this.setState({
      ...this.state,
      foodsArray: [
        ...this.state.foodsArray,
        [this.state.foodsArray[e.target.name]["quantity"]] = e.target.value
      ]
    })
  }

  changeModal = () => {
    const formAppearCopy = (this.state.formAppear) ? false : true
    this.setState({
      ...this.state,
      formAppear : formAppearCopy
    })
  }

  addFood = (e) => {
    e.preventDefault()
    const copyFoodsArray = this.state.foodsArray
    copyFoodsArray.push(this.state.form)
    this.setState({
      ...this.state,
      foodsArray : copyFoodsArray
    })
    this.changeModal()
  }

  inputChange = (e) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [e.target.name] : e.target.value
      }
    })
  }

  doSearch = (e) => {
    let filted = this.state.foodsArray
    filted = filted.filter(foods =>
        foods.name.includes(e.target.value)
      )
    this.setState({
      ...this.state,
      filtedFoods : filted
    })
  }

  addToAddedFoods = (e) => {
    let addedFoodsCopy = this.state.addedFoods
    addedFoodsCopy.push(this.state.foodsArray[e.target.name])
    this.setState({
      ...this.state,
      addedFoods: addedFoodsCopy
    })
    if (this.state.addedFoods.length > 0){
      let total = 0
      this.state.addedFoods.forEach(element => {
        total += element.calories * element.quantity
      })
      this.setState({
        ...this.state,
        totalCalories: total
      })
    }
  }


  render() {
    return (
      <div className="container-global">
      <div className="left">
        <Search change={this.doSearch}/>
        <button onClick={this.changeModal}>Add new food</button>

        {(this.state.filtedFoods.length === 0) ?

        this.state.foodsArray.map((element, index) => (
          <FoodBox addToAddedFoods={this.addToAddedFoods} key={index} id={index} name={element.name} calories={element.calories} image={element.image} quantity={element.quantity} handleInput={this.handleInput} />
        ))
        :
        this.state.filtedFoods.map((element, index) => (
          <FoodBox addToAddedFoods={this.addToAddedFoods} key={index} id={index} name={element.name} calories={element.calories} image={element.image} quantity={element.quantity} handleInput={this.handleInput} />
        ))}

        {/* MODAL */}
        { (this.state.formAppear) ? 
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Food create</p>
              <button onClick={this.changeModal} className="delete" aria-label="close"></button>
            </header>
            <form onSubmit={this.addFood}>
            <section className="modal-card-body">
            <div className="field">
            <label className="label is-medium">Introduce the info</label>
            <div className="control has-icons-left has-icons-right">
              <input name="name" onChange={this.inputChange} className="input is-medium" type="text" placeholder="Name"/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope fa-xs"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check fa-xs"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input name="calories" onChange={this.inputChange} className="input is-medium" type="number" placeholder="Nº Calories"/>
              <span className="icon is-left">
                <i className="fas fa-envelope fa-sm"></i>
              </span>
              <span className="icon is-right">
                <i className="fas fa-check fa-sm"></i>
              </span>
            </div>
          </div>

          <div className="field">
            <div className="control has-icons-left has-icons-right">
              <input name="image" onChange={this.inputChange} className="input is-medium" type="text" placeholder="Img"/>
              <span className="icon is-medium is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-medium is-right">
                <i className="fas fa-check"></i>
              </span>
            </div>
          </div>

            </section>
            <footer className="modal-card-foot">
              <button  type="submit" className="button is-success">Add</button>
            </footer>
            </form>
          </div>
        </div>
        : ""}
      </div>
      <div className="right">
        <h1>Today's foods</h1>
        {this.state.addedFoods.map((element, index) => (
          <p key={index}>· {element.quantity} {element.name} = {element.quantity * element.calories} cal</p>
        ))}
        <p>Total: {this.state.totalCalories} cal</p>
      </div>
    </div>
    );
  }
}

export default App;
