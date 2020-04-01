import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";
import Search from "./components/Search";

class App extends React.Component {
  constructor() {
    super();
    let foodList = [...foods];
    this.state = {
      foodList: foodList,
      showForm: false,
      searchTerm: null
    };
  }

  toggleVisibility = () => {
    if (this.state.showForm === false) {
      this.setState({
        showForm: true
      });
    } else {
      this.setState({
        showForm: false
      });
    }
  };

  addFoodItem = foodItem => {
    const foodCopy = [...this.state.foodList];
    foodCopy.push(foodItem);
    this.setState({
      foodList: foodCopy
    });
  };

  handleSearch = searchValue => {
    this.setState({
      searchTerm: searchValue
    })
  }

  render() {
    const filteredList = this.state.foodList.filter((item) => {
      if (this.state.searchTerm === null){
        return true
      }
      else {
        return item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      }
    })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>

        <div className="Search">
          <Search 
            handleSearch={this.handleSearch}
          />
        </div>

        <div className="Add-food">
          <div>
            {this.state.showForm ? (
              <div>
                <AddFood
                  addFoodItem={this.addFoodItem}
                  toggleVisibility={this.toggleVisibility}
                />
              </div>
            ) : (
              <button onClick={this.toggleVisibility}>Add more</button>
            )}
          </div>
        </div>

        <div className="App-intro">
          <FoodBox foodList={filteredList} />
        </div>
      </div>
    );
  }
}

export default App;
