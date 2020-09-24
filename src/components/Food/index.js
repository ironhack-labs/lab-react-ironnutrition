import React from 'react';
import './style.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

const foodsList = foods;

class Foods extends React.Component {
  state = {
    foods: foodsList,
    active: false,
    name: '',
    calories: 0,
    image: '',
    quantity: 0,
  };

  setTheState = (e) => {
    console.log('e', e.target.name, e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, calories, image, quantity } = this.state;
    const data = { name, calories, image, quantity };

    const newFoodList = this.state.foods;

    if (!newFoodList.includes(data)) {
      newFoodList.push(data);
    }

    this.setState((previousState) => ({
      foods: newFoodList,
    }));

    console.log('list', newFoodList);

    // if (!newList.includes(randomCeleb)) {
    //     newList.push(randomCeleb);
    //   }
    //   this.setState((previousState) => ({
    //     celebsList: newList,
    //   }));
    // };

    console.log('data', data);
  };

  toggleForm = () => {
    //using state passing a function instead of an object
    this.setState((previousState) => ({
      active: !previousState.active,
    }));
  };

  render() {
    const { active } = this.state;
    return (
      <>
        <button onClick={this.toggleForm}>Add new foods</button>

        <form
          onSubmit={(e) => this.handleSubmit(e)}
          style={{ display: active ? 'block' : 'none' }}
        >
          <input
            name="name"
            type="text"
            placeholder="food name here"
            onChange={this.setTheState}
            value={this.state.name}
          ></input>
          <input
            name="calories"
            type="number"
            placeholder="calories"
            onChange={this.setTheState}
            value={this.state.calories}
          ></input>
          <input
            name="image"
            type="text"
            placeholder="image url"
            onChange={this.setTheState}
            value={this.state.image}
          ></input>
          <button style={{ display: active ? 'block' : 'none' }} type="submit">
            Submit
          </button>
        </form>

        {foods.map((eachFood, index) => {
          return (
            <>
              <div className="box">
                <article className="media">
                  <div className="media-left">
                    <figure className="image is-64x64">
                      <img src={eachFood.image} />
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{eachFood.name}</strong> <br />
                        <small>{eachFood.calories} cal</small>
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
              </div>
            </>
          );
        })}

        {/* hello */}
      </>
    );
  }
}

export default Foods;
