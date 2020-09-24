import React, { Component } from 'react';
import foods from '../foods.json';

class FoodAddForm extends Component {
  state = {
    foodName: ' ',
    calories: ' ',
    picture: ' ',
  };

  /** addFoodToData() */
  addFoodToData = () => {
    console.log('FoodAddForm->addFoodToData()->state daa: ', this.state);
    // add the record to json file:
    foods.push(this.state);
    this.props.flagShowList(true);
  };

  /** form handler  */
  submitFormHdlr = (evt) => {
    console.log(' stopped the FORM from rendering ');
    evt.preventDefault();
  };

  /** inputEventHdlr  */
  inputEventHdlr = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log('FoodAddForm->inputEventHdlr()->state daa: ', this.state);
  };

  /** render () */
  render() {
    console.log(' liat udpdated : ', foods);
    console.log('FoodAddForm->render()->state daa: ', this.state);
    return (
      <div>
        <h2> Add a new Food Item </h2>
        <form onSubmit={(evt) => this.submitFormHdlr(evt)} method="POST">
          {/* <label htmlFor="foodName"> Enter Food name: </label> */}
          <input
            type="text"
            name="foodName"
            onChange={(evt) => this.inputEventHdlr(evt)}
            defaultValue={this.state.foodName}
          />
          {/* <label htmlFor="calories"> Enter Food Calaries: </label> */}
          <input
            type="text"
            name="calories"
            onChange={(evt) => this.inputEventHdlr(evt)}
            defaultValue={this.state.calories}
          />
          {/* <label htmlFor="picture"> Picture url for food : </label> */}
          <input
            type="text"
            name="picture"
            onChange={(evt) => this.inputEventHdlr(evt)}
            defaultValue={this.state.picture}
          />
          <button onClick={this.addFoodToData}> Add Food Item </button>
        </form>
      </div>
    );
  }
}

export default FoodAddForm;
