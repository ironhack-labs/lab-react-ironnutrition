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
      addToList: [],
      filteredData: []
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

  handleInputChange = event => {
    const query = event.target.value;

    this.setState(prevState => {
      const filteredData = prevState.firstFood.filter(element => {
        return element.name.toLowerCase().includes(query.toLowerCase());
      });

      return {
        query,
        filteredData
      };
    });
  };

  // filterList = event => {
  //   let filtered = [...this.state.filteredList];
  //   filtered.filter((item) => {
  //     return item.name.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
  //   });
  //   console.log('filtered array',filtered)

  //   this.setState({
  //     filteredList: filtered
  //   });
  // };

  addToList = oneFood => {
    const myList = [...this.state.addToList];
    myList.push(oneFood);
    // console.log(myList);
    this.setState({
      addToList: myList
    });
  };

  render() {
    let addFoodForm;
    if (this.state.displayAddFood === true) {
      addFoodForm = <AddFood addTheFood={this.addFoodHandler} />;
    }

    return (
      <div className="App">
        <div className="row">
          <div className="searchForm">
            <form>
              <input
                placeholder="Search for..."
                value={this.state.query}
                onChange={this.handleInputChange}
              />
            </form>
            <div>
              {this.state.filteredData.map(i => (
                <p>{i.name}</p>
              ))}
            </div>
          </div>

          <div className="column">
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
            <h1>
              <b>Today's dinner</b>
            </h1>
            {this.state.addToList.map((elem, Index) => (
              <AddToList addToList={this.addToList}>{elem}</AddToList>
            ))}
            <h5>
              <b>Total: </b>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
