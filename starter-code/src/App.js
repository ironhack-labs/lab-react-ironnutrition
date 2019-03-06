import React, { Component } from 'react';
import logo from './logo.svg';
import foods from './foods.json'
import 'bulma/css/bulma.css';
import './App.css';
import AddForm from './AddForm'

class App extends Component {
  state = {
    foods,
    search:'',
    filteredFoods:foods,
    isHidden:true,
    order: []
  }
  handleChange = (e) => {
    let search = e.target.value
    let filteredFoods = this.state.foods.filter(food => food.name.includes(search)) //search by matchign food name with string
    this.setState({
      search,
      filteredFoods
    })
  }

  pushOrder = (food) => {
    this.setState({
      order:[...this.state.order, ...[food]]
    })
  }

  showOrder = () => {
    let yourOrder = this.state.order.map((o)=>{
      return <li>{o.name}, {o.calories}, {o.quantity}</li>
    })
    return yourOrder
  }

  showFoods = () => {
    let list = this.state.filteredFoods.map((food, i) => {
      return (
        <div key={i} className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
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
                  {/* <input
                    className="input"
                    type="number"
                    value="1"
                  /> */}
                </div>
                <div className="control">
                  <button onClick={() => this.pushOrder(food)} className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      )
    })
    return list;
  }

  addFoodToList = (e) => {
    e.preventDefault()
    let food = e.target.food.value
    let quantity = e.target.quantity.value
    let newListOfFoods = [...this.state.filteredFoods]
    newListOfFoods.push({name:food, calories:quantity})
    this.setState({
      filteredFoods: newListOfFoods
    })
  }
  
  showForm = () => {
    if(!this.state.isHidden){
      return (
      <form onSubmit={this.addFoodToList}>
        <input name="food" placeholder="add product"></input>
        <input name="quantity" placeholder="add quantity"></input>

        <button>Submit</button>
      </form>
      )
    } else {
      return ''
    }
  }

  toggleHidden = () => {
    this.setState({
      isHidden:!this.state.isHidden
    })
  }

  render() {
    return (
      <div className="App">

        <AddForm showForm={this.showForm} toggleHidden={this.toggleHidden} isHidden={this.state.isHidden}/>

          {this.showOrder()}
        

        <input type="text" placeholder="search" name="search" value={this.state.search} onChange={(e) => this.handleChange(e)} />
        {this.showFoods()}
        
      </div>
    );
  }
}

export default App;