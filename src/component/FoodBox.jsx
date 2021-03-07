import React from 'react';
import foods from './../foods.json';

class FoodBox extends React.Component {
    state = {
        foods: foods,
        newFoodname: '',
        newFoodCalories: '',
        newFoodImage: ''
    };

    handleFormSubmission = event => {
        event.preventDefault();
        const foodName = this.state.newFoodName;
        const foodCalories = this.state.newFoodCalories;
        const foodImage = this.state.newFoodImage;
        if (foodName, foodCalories, foodImage) {
        const addFood = {
          foodName,
          foodCalories,
          foodImage
        };
        this.setState({
          foods: [addFood, ...this.state.foods],
          newFoodname: '',
          newFoodCalories: '',
          newFoodImage: ''
          })
        }
      };
    
      handleNewFoodAdd = event => {
        const value = event.target.value;
        this.setState({
          [event.target.newFoodname]: value,
          [event.target.newFoodCalories]: value,
          [event.target.newFoodImage]: value
        });
      };


    render() { 

    return (
        <div className="box">
        <form onSubmit={this.handleFormSubmission}>
            <label>Add your food here</label>
            <br/>
            <input type="text" name="name" placeholder="Name" 
          onChange={this.handleNewFoodAdd} 
          value={this.state.newFoodName} />
            <input type="text" name="calories" placeholder="Calories" 
          onChange={this.handleNewFoodAdd} 
          value={this.state.newFoodCalories} />
            <input type="url" name="image" placeholder="URL" 
          onChange={this.handleNewFoodAdd} 
          value={this.state.newFoodImage} />
          <button>Add food</button>
        </form>
        <br/>
          {this.state.foods.map((food) => (
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1" />
                </div>
                <div className="control">
                  <button className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
            ))}
        </div>
        );
    };
}


export default FoodBox;