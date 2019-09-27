import React, { Component } from 'react';
import './App.css';

import FoodBox from './components/foodbox'
import foods from './foods.json'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allFoods: foods,
      visibleFoods: foods,
      nameInput: "",
      calInput: "",
      imgInput: "",
      formShowing: false,
    }
  }


  showAllTheFoods = () => {

    return this.state.visibleFoods.map((eachfood, i) => {

      return (
        <FoodBox key={i}
          theName={eachfood.name}
          theCalories={eachfood.calories}
          theImage={eachfood.image}
        />
      )

    })

  }

  render() {

    return (
      <div className="App">

        <h2 className="title"> Foods </h2>

        {/* The float left allows us to float the form on the right */}
        <div style={{ width: '40%', float: 'left' }}>

          {this.showAllTheFoods()}

        </div>

        <div style={{ width: '40%', float:'right' }}>

          <form onSubmit={this.addNewFood}>

            <h2 className = "title"> Add New Food </h2>

            <legend> Name </legend>
            <input type="text" />

            <legend> Calories </legend>
            <input type="number" />

            <legend> Image </legend>
            <input type="text" />

            <button> Submit </button>

          </form>

        </div>


      </div>
    );

  }
}

export default App;
