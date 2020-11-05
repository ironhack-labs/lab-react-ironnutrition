import React from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox';
import CreateNewUserForm from './components/CreateNewUserForm/CreateNewUserForm';

class App extends React.Component {

  state = {
    foods,
  }

  displayFood() {
    const foodReturned = this.state.foods.map((food) => {
      return (
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} alt={`food-${food.name}`} />
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
                <input className="input" type="number" value={food.quantity} />
              </div>
              <div className="control">
                <button className="button is-info">
                  +
                                </button>
              </div>
            </div>
          </div>
        </article>
      );
    });
    return foodReturned;
  }

  render() {
    return (
      <div>
        <div className="App">
          <FoodBox food={this.displayFood()} />
        </div>

        <CreateNewUserForm />

      </div>
    );
  }
}

export default App;
