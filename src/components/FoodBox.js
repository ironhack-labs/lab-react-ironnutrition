import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import foods from '../foods.json';
import FoodList from './FoodList';
import AddNewFood from './AddNewFood';
import SearchFood from './SearchFood';

class FoodBox extends Component {
  constructor() {
    super();
    this.state = { foods: foods };
  }

  addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods];
    theFood.index = [...this.state.foods].pop().index + 1;
    foodsCopy.push(theFood);
    this.setState({
      foods: foodsCopy,
    });
  };

  filterFood = (input) => {
    const filtered = this.state.foods.filter((el) =>
      el.name.toLoweCase().includes(input.toLowerCase())
    );
    this.setState({ filtered });
  };

  // showForm = () => {
  //   const NewForm = [...this.state.contacts];
  //   const addForm = foods[Math.floor(Math.random() * contacts.length)];

  //   NewContact.push(addOne);

  //   this.setState({
  //     contacts: NewContact,
  //   });
  // };

  render() {
    return (
      <div>
        {/* <div>
          <button onClick={this.showForm}>Add New Food</button>
        </div> */}
        <SearchFood filterFood={this.filterFood} />
        <AddNewFood addthefood={this.addFoodHandler} />
        {this.state.foods.map((oneFood, index) => {
          return <FoodList key={index} {...oneFood} />;
        })}
      </div>
    );
  }
}

export default FoodBox;
