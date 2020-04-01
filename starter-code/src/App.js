import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import AddToList from "./components/AddToList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstFood: foods,
      displayAddFood: false,
      addToList: []
    };
  }
  displayAddFood = () => {
    this.setState({
      displayAddFood: !this.state.displayAddFood
    });
  };
  addFoodHandler = theFood => {
    const foodsCopy = [...this.state.firstFood];
    foodsCopy.unshift(theFood);
    this.setState({
      firstFood: foodsCopy
    });
  };

  addToList = oneFood => {
    const myList = [...this.state.addToList];
    myList.push(oneFood);
     //console.log(myList);
    this.setState({
      addToList: myList
    });
  };

  searchHandler = query => {
    this.setState({
      searchQuery: query.target.value
    })
  }
    
  searchFilter = (search) => {
    const filt = [...foods].filter((e) => e.name.toLowerCase().includes(search.target.value.toLowerCase()))
    this.setState({
      firstFood: filt
    })
  }
  render() {
    let addFoodForm;
    if (this.state.displayAddFood === true) {
      addFoodForm = <AddFood addTheFood={this.addFoodHandler} />;
    }
    return (
      <div className="App">
        <div className="row">
          <div className="column">
            <input
            type="text"
            placeholder="search"
            name="textarea"
            value={this.state.textarea}
            onChange={this.searchFilter}/>

            <button onClick={this.displayAddFood}>Add Food</button>
            {addFoodForm}
            {this.state.firstFood.map((oneItem, index) => (
              <FoodBox
                addToList={this.addToList}
                key={index}
                image={oneItem.image}
                name={oneItem.name}
                calories={oneItem.calories}
                quantity={oneItem.quantity}
              />
            ))}
          </div>
          <div className="column">
          <h1>Today's Foods</h1>
            {this.state.addToList.map((elem, Index) => (
             <AddToList>
                {elem}
              </AddToList>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default App;