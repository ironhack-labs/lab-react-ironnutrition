import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import foods from "./foods.json";
import FoodBox from "./components/FoodBox";
import AddFood from "./components/AddFood";

class App extends React.Component {
  constructor() {
    super();
    let foodList = [...foods];
    this.state = {
      foodList: foodList,
      showForm: false
    };
  }

//   displayForm = () => {
//     this.setState({
//       showForm: true });
// };

  toggleVisibility = () => {
    if (this.state.showForm === false){
      this.setState({
        showForm: true
      });
    }
    else{
      this.setState({
        showForm: false
      });
    }
  }

  addFoodItem = foodItem => {
    const foodCopy = [...this.state.foodList];
    foodCopy.push(foodItem);
    this.setState({
      foodList: foodCopy
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">IronNutrition</h1>
        </header>
        <div className="Add-food">
        <div>
          {/* <button onClick={this.toggleVisibility}>Add more</button> */}
          { this.state.showForm
          ? 
          <div>
          {/* <button onClick={this.toggleVisibility}>Add more</button> */}
          <AddFood
          addFoodItem={this.addFoodItem}
          toggleVisibility={this.toggleVisibility}
          /> 
          </div>
          :
          <button onClick={this.toggleVisibility} >Add more</button>
          }
        </div>

        
        </div>

        <div className="App-intro">
          <FoodBox foodList={this.state.foodList} />
        </div>
      </div>
    );
  }
}

export default App;

