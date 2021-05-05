import React, { Component } from 'react';
import FoodBox from '../foodbox/FoodBox';
import Form from '../form/Form';
import "./FoodList.css";

export default class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        foods: this.props.foods,
        display: false
    }
  }
  componentDidUpdate(){
      
  }

  addFood = (food) => {
      const arrayCopy = [...this.state.foods ];
      arrayCopy.push(food);
      this.setState({foods: arrayCopy});
  }

  render() {
    const {foods} = this.state;
    return (
        <>
            <button className="button is-info mt-2 mb-4 ml-2" onClick={() => {this.setState({display: !this.state.display})}}>Add a food</button>
            {this.state.display && <Form addMovie={(food) => this.addFood(food)} /> }
            <div id="foods-container">
                {foods.map((food) => {
                return <FoodBox key={food.name} {...food}></FoodBox>;
                })}
            </div>
        </>
    );
  }
}
