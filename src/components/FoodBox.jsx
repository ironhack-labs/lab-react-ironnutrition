//import bulma?
//import all necessary stuff
//e.g. React in every COmponent
import React, { Component } from 'react';
//import './FoodBox.css'
import FoodDetail from './FoodDetail.js';
import AddForm from './AddForm.js';


//create Class component Foodbox
class Foodbox extends Component {
  //state
  state = {
    showForm: false,
  };

  //event handlers

  handleClick = () => {
    this.setState({
      showForm: true,
    });
  };


  

  render() {
    const { foods, handleAddTotCalories} = this.props;
    const {showForm}  = this.state
    

    return (
      <div>
        {showForm ? (
          <AddForm onAddFood={this.handleAddFood} />
        ) : (
          <button onClick={this.handleClick}>Show Food Form</button>
        )}

        {foods.map((food, i) => {
          //show image, name, calories,

          return <FoodDetail myFood={food}
                              key={i} 
                              handleAddTotCalories = {handleAddTotCalories} 
                              />;
        })}
      </div>
    );
  }
}

//export Component
export { Foodbox };
