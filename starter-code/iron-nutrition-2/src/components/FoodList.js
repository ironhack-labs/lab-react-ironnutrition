import React, { Component } from "react";
import FoodBox from "./FoodBox";
import foods from "../foods.json";
import AddFood from "./AddFood";
import SearchBar from "./SearchBar"

class FoodList extends Component {
  constructor() {
    super();
    this.state = {
      isHidden: true,
      listFood: foods
    };
  }

  addFood = food => {
    const foodCopy = [...this.state.listFood];
    foodCopy.push(food);
    this.setState({ listFood: foodCopy });

    // alert('ciao')
  };

  showForm = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };
    
     

  render() {
    return (
        <>
            <SearchBar />
        <div>
          <button
            onClick={this.showForm}
            className="btn btn-sm btn-info buttonmargin"
                >SHOW
          FORM</button>
          {!this.state.isHidden && <AddFood includeFood={this.addFood} />} 
        </div>
        {this.state.listFood.map((elm, idx) => (
          <FoodBox {...elm} key={idx} addFood={() => this.addFood(idx)} />
        ))}
      </>
    );
  }
}

export default FoodList;
