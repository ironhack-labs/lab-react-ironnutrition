import React from "react";
import foodsList from "./foods.json";
import Search from "./Search.js";
import Foodbox from "./Foodbox.js";
import TodaysFoods from "./TodaysFoods.js"

class DisplayFoods extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      foods: foodsList
    };
  }
}

searchFoods(searchText) {
  const foods = foodsList.filter((oneFood) => {
    return oneFood.name.includes(searchText);
  });
  this.setState({foods});
}

render() {
  const {foods} = this.state;
  return (
    <section>
      {foods.map((oneFood, index) => {
          <Search searchFunction={(searchText) => this.searchFoods(searchText)} />
          return <Foodbox key={index} oneFood={oneFood} />;  
        })}
    </section>
  )
}

export default DisplayFoods;