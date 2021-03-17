import React, { Component } from 'react';
import foods from '../foods.json';
import AddFood from '../Components/AddFood';
import MyFilteringComponent from './SearchBar';


class FoodBox extends Component {

state = {
    foods: foods
}


addFoodHandler = (theFood) => {
    const foodsCopy = [...this.state.foods]; // copy!
    
    foodsCopy.push(theFood);

    this.setState({
      foods: foodsCopy
    })

    
  }

  filterFoodHandler = () => {
    const foodsCopy = [...this.state.foods]; 

    const arrayNameFood = foodsCopy.map((food) => food.name)
    
    console.log("HERE", arrayNameFood)

    this.setState({
      foods: arrayNameFood
    })

    
  }


  render() {

    const test =
    [
        this.state.foods[0].name,
        this.state.foods[1].name,
        this.state.foods[2].name,
        this.state.foods[3].name,
        this.state.foods[4].name,
        this.state.foods[5].name,
    ];
console.log("HEY",this.filterFoodHandler)

    return (
 
       
      <div className="box">
          {/* <MyFilteringComponent content={this.arrayNameFood} /> */}
          <MyFilteringComponent content={test} />
          <AddFood addTheFood={this.addFoodHandler} />
       {this.state.foods.map((food, index) =>
           
        <article key= {index} className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>Cal {food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value="1" />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
           )}
      </div>
    )
  }
}

export default FoodBox;
