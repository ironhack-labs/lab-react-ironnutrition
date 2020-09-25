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
    input: '',
    counter: 1,
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
      active: !previousState.active,
    }));

    console.log('list', newFoodList);

    console.log('data', data);
  };

  toggleForm = () => {
    this.setState((previousState) => ({
      active: !previousState.active,
    }));
  };

  handleCounter = () => {
    this.setState({
      counter: (this.state.counter += 1),
    });
  };

  render() {
    const { active } = this.state;
    const { input } = this.state;
    return (
      <>
        <button onClick={this.toggleForm}>Add new foods</button>

        <form
          key="key"
          onSubmit={(e) => this.handleSubmit(e)}
          style={{ display: active ? 'block' : 'none' }}
        >
          <input
            key="nam"
            name="name"
            type="text"
            placeholder="food name here"
            onChange={this.setTheState}
            value={this.state.name}
          ></input>
          <input
            key="cal"
            name="calories"
            type="number"
            placeholder="calories"
            onChange={this.setTheState}
            value={this.state.calories}
          ></input>
          <input
            key="img"
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

        <div>
          <input
            name="input"
            onChange={this.setTheState}
            placeholder="search"
          ></input>
        </div>

        {foods.map((eachFood, index) => {
          if (eachFood.name.toLowerCase().includes(input.toLocaleLowerCase())) {
            return (
              <>
                <div key={index} className="box">
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
                          <input
                            key={index}
                            className="input"
                            type="number"
                            value={this.state.counter}
                            onChange={this.setTheState}
                          ></input>
                        </div>
                        <div className="control">
                          <button
                            onClick={this.handleCounter}
                            className="button is-info"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </>
            );
          }
        })}

        {/* div from return ends here */}
      </>
    );
  }
}

export default Foods;
