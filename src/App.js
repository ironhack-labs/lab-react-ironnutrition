import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';
import Create from './components/Create';
import Search from './components/Search';

class App extends Component {

  state = {
    foodList: foods,
    filteredFoods: foods,
    showForm: false,
  }

  handleAddFood = (e) => {
    e.preventDefault()

    let name = e.target.name.value
    let calories = e.target.calories.value
    let image = e.target.image.value

    this.setState({
      foodList: [...this.state.foodList, { name: name, calories: calories, image: image }],
      filteredFoods: [...this.state.foodList, { name: name, calories: calories, image: image }]
    })


  }

  handleFilter = (event) => {
    let inp = event.target.value

    let newFoods = this.state.foodList.filter((item) => {
      return item.name.includes(inp)
    })

    this.setState({
      // foodList: newFoods
      filteredFoods: newFoods
    })
  }



  render() {
    return (
      <div>
        <h1 style={{fontSize:"40px", marginLeft: "40px"}}>Iron Nutrition</h1>
        <div style={{justifyContent: "center"}}>
        <Search
          onFilter={this.handleFilter} />
        <br/>  

        <button onClick={() => { this.setState({ showForm: !this.state.showForm }) }}>Add Food</button>
        {this.state.showForm && <Create callback={this.foodList} />}
        <br />
        </div>
        {
          this.state.filteredFoods.map((item, index) => {
            return (
              <>
                <FoodBox
                  key={index}
                  name={item.name}
                  calories={item.calories}
                  image={item.image} />
              </>
            )
          })
        }
      </div>
    );
  }
}

export default App;
