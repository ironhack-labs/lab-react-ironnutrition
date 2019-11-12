import React, { Component, Fragment } from 'react';
import FoodBox from './FoodBox';
import MyFoods from './myFoods';


class Search extends Component {

  constructor(props){
      super(props);
      console.log(props);
      this.state = {
        filteredFoods: [],
        myFoods: [],
    }
      this.handleChange=this.handleChange.bind(this);
      this.addToMyFoods=this.addToMyFoods.bind(this);
      this.removeFromMyFoods=this.removeFromMyFoods.bind(this);
  }

  componentDidMount() {
    this.setState({
      filteredFoods: this.props.foods,
    });
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      filteredFoods: nextProps.foods,
    });
  }

  handleChange(e) {
            // Variable to hold the original version of the list
        let currentList = [];
            // Variable to hold the filteredFoods list before putting into state
        let newList = [];

            // If the search bar isn't empty
        if (e.target.value !== "") {
                // Assign the original list to currentList
          currentList = this.props.foods;
                // Use .filter() to determine which items should be displayed
                // based on the search terms
          newList = currentList.filter(foods => {
                    // change current item to lowercase
            const currentFoodText = foods.name.toLowerCase();
                    // change search term to lowercase
            const searchBarText = e.target.value.toLowerCase();
                    // check to see if the current list item includes the search term
                    // If it does, it will be added to newList. Using lowercase eliminates
                    // issues with capitalization in search terms and search content
            return currentFoodText.includes(searchBarText);
          });
        } else {
                // If the search bar is empty, set newList to original task list
          newList = this.props.foods;
        }
            // Set the filteredFoods state based on what our rules added to newList
        this.setState({
          filteredFoods: newList,
        });
}

addToMyFoods(newFood) {
  const myFoodsCopy = [...this.state.myFoods];
  const checkAlreadySelectedFood = myFoodsCopy.some(food => food.name === newFood.name);
  if (!checkAlreadySelectedFood) {
    myFoodsCopy.push(newFood);
  } else {
    for (let index = 0; index < myFoodsCopy.length; index += 1) {
      if (myFoodsCopy[index].name === newFood.name) {
        myFoodsCopy[index].quantity += newFood.quantity;
        break;
      }
    }
  }
  this.setState({
    myFoods: myFoodsCopy,
  })
}

removeFromMyFoods(index) {
  const myFoodsCopy = [...this.state.myFoods];
  myFoodsCopy.splice(index, 1);
  this.setState({
    myFoods: myFoodsCopy,
  });
}

  render(){
    return (
      <div>
          <div className="field">
            <div className="control">
                <input type="text" className="input search-bar search-bar-adjust" name="search" placeholder="Search..." onChange={this.handleChange} value={this.props.foods.name}/>
             </div>
          </div> 
          <div className="columns">
            <div className="column">
            {
              this.state.filteredFoods.map((food, index) => {
                return (
                  <FoodBox key={index} {...food} quantity={food.quantity + 1} addToMyFoods={this.addToMyFoods} />
                )
              })
            }
            </div>
            <div class="column content">
              <h2 class="subtitle">Today's foods</h2>
              <ul>
                {
                  this.state.myFoods.map((myFood, index) => {
                    return (
                      <MyFoods key={index} {...myFood} removeFromMyFoods={() => this.removeFromMyFoods(index)} />
                     )
                  })
                }
              </ul>
              <strong>Total: {this.state.myFoods.reduce((myCalories, myFood) => (myCalories += myFood.quantity * myFood.calories), 0)} calories</strong>
            </div>
          </div>
      </div>
    )
  }
}

export default Search;