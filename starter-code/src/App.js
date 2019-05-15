import React, { Component } from 'react';
import logo from './logo.svg';
import 'bulma/css/bulma.css';
import './App.css';
import foods from './foods.json'




/**
 * 
 * 
 * first change the state to show the name, calories, and quantity somewhere.  Then pass that information to App.js and push it into todaysFood exactly how u did. 
 */

export default class App extends Component {

  //State
  state = {
    food: foods,
    showAddFood: false,
    food2: foods,
    todaysFoods: [],
    name: '',
    calories: '',
    image: '',
    quantity: '',
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

  clickTheButton = () => {
    console.log('The Button has been clicked', this.state.food)
  }


  addTodaysFoods = (i) => { //In here 

    console.log()
    let foodToday = {
      name: this.state.name,
      calories: this.state.calories,
      image: this.state.image,
      quantity: this.state.quantity
    }

    //if (this.state.quantity != 0) {
    let newFoodToday = []
    newFoodToday.push(foodToday)
    this.setState({
      food: newFoodToday
    })
    //}


  }


  addEachFood = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  filterFeeder = (e) => {
    let currentFood = []
    let filterFood = [...this.state.food]

    if (e.target.value !== "") {
      currentFood = [...this.state.food]
      filterFood = currentFood.filter((filterFood) => {
        return filterFood.name.toLowerCase().includes(e.target.value)
      })
    } else {
      filterFood = this.state.food2;
    }
    this.setState({
      food: filterFood
    })
  }

  render() {

    return (
      <div className="App">
        <div class='columns'>
          <div class='column'>
            <h1>Foods List</h1>
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

            {/* Search Bar */}
            {/* <div> */}
            <form class='field' >
              <div>
                <input class='input' placeholder='Search Foods' type='text' onChange={this.filterFeeder}></input>
              </div>
            </form>
            {/* </div> */}

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
                            // value="1"
                            />
                          </div>
                          <div className="control">
                            <button className="button is-info" onClick={this.clickTheButton}>+</button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                )
              })
            }
          </div>

          {/* Other Stuff */}
          <div class='column'>
            <h1>Todays Foods</h1>
            {/* Other FoodBox  */}

            {
              this.state.todaysFoods.map((aFood, i) => {
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
                            // value="1"
                            />
                          </div>
                          <div className="control">
                            <button className="button is-info">+</button>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                )
              })
            }

          </div>


        </div>
        {/* End App */}
      </div >




    );
  }
}

// export default App;
