import React from 'react';
import foods from './../foods.json';
import AddFood from './AddFood';
import Search from './Search';

class FoodBox extends React.Component {
  state = {
    foods: foods,
    showForm: true,
    quantity: 1,
  };

  addNewFood = (newFood) => {
    const updatedFoods = [newFood, ...this.state.foods];
    this.setState({ foods: updatedFoods });
  };

  toggleForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  filteredFoods = (searchStr) => {
      const filteredFoods = foods.filter((oneFood) => oneFood.name.toLowerCase().includes(searchStr.toLowerCase()))
      

      
      this.setState({foods: filteredFoods});
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      quantity: Number(value),
    });
  };

  addQuantity = () => {
      const newQuantity = this.state.quantity;
   newQuantity++;
  }

  render() {
    return (
      <div>
        <Search filteredFoods={this.filteredFoods}/>
        <br />
        <h1>Food list</h1>
        <button onClick={this.toggleForm}>
          {this.state.showForm ? 'Close' : 'Add New Food'}
        </button>
        {this.state.showForm && <AddFood addNewFood={this.addNewFood} />}
        {this.state.foods.map((food) => {
          return (
            <div key={food.image} className="box">
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
                      <input className="input" type="number" onChange={this.handleChange} value={this.state.quantity} />
                    </div>
                    <div className="control">
                      <button className="button is-info" onClick={() => this.props.addQuantity({...this.props.food, quantity: this.state.quantity})}>+</button>
                      <h1>Today's foods</h1>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    );
  }
}

export default FoodBox;
