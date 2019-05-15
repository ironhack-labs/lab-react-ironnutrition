import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'

class App extends Component {

  //State
  state = {
    food: foods,
    showAddFood: false,

  };

  // Functions 
  //Toggle Switch for showAddFoods
  toggle = () => {
    this.setState({
      showAddFood: !this.state.showAddFood
    })
  }

  //Add New Food To List
  addAFood = (e) => {
    e.preventDefault()

    let newFood = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: this.state.quantity
    }
    console.log(newFood)

    let newFoods = [...this.state.food]
    newFoods.push(newFood)
    this.setState({
      food: newFoods
    })
  }

  addEachFood = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return (
      <div className="App">

        {/* Add a Food Button  */}
        <button class='button' onClick={this.toggle}>Add A Food</button>

        {this.state.showAddFood && (
          <div>
            <form class='field' onSubmit={this.addAFood} >
              <div class='control'>
                <input class='input' name='name' type='text' placeholder='Food Name' onChange={this.addEachFood}></input>
              </div >
              <div class='control'>
                <input class='input' name='calories' type='text' placeholder='Calories' onChange={this.addEachFood}></input>
              </div >
              <div class='control'>
                <input class='input' name='image' type='text' placeholder='Image' onChange={this.addEachFood}></input>
              </div >
              <button class='button' type='submit'> Add That Food!</button>
            </form >

          </div>
        )}




        {/* //FoodBox */}
        {
          this.state.food.map((aFood, i) => {
            return (

              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img key={i} src={aFood.image} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      {/* Place Stuff Here */}

                      <p key={i}>
                        <strong>{aFood.name}</strong> <br />
                        <small>{aFood.calories}</small>
                      </p>
                    </div>
                  </div>
                  <div className="media-right">
                    <div className="field has-addons">
                      <div className="control">
                        <input
                          className="input"
                          type="number"
                          value="1"
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
              </div>

            )
          })
        }

        {/* End App */}
      </div >




    );
  }
}

export default App;
