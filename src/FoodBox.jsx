import React from 'react';
import allFoods from './foods.json';
import SearchBar from './SearchBar';

class FoodBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFormVisible: false,
      foods: allFoods,
      allFoods: allFoods,
      name: '',
      calories: 0,
      image: '',
      todayFoods: [],
      tCalories: 0
    };
  }

  appearForm = () => {
    this.setState({
      isFormVisible: true
    });
  };

  addFood = (event) => {
    event.preventDefault();

    const { name, calories, image } = this.state;
    const data = { name, calories, image };

    this.setState((state) => ({
      foods: [...state.foods, data]
    }));
  };

  handleInputChange = event => {
    const { value } = event.target;
    const inputName = event.target.name;
    this.setState({
      [inputName]: value
    });
  };

  filterFoods = (event) => {
    const { value } = event.target;
    this.setState((state) => ({
      foods: state.allFoods.filter((food) => food.name.toLowerCase().includes(value.toLowerCase()))
    }));
  };

  selectFood = (food) => {
    this.setState((state) => ({
      state.todayFoods.filter((x) => {
        x.name.toLowerCase() === (food.toLowerCase());
      })
      todayFoods: [...state.todayFoods, food],
      tCalories: state.tCalories + food.calories
    }))
  };

  setQuantity = (event, food) => {
    const { value } = event.target;

    const foods = this.state.foods.map((f) => {
      if (f.name === food.name) {
        f.quantity = Number(value);
      }

      return f;
    });

    this.setState({ foods });
  };

  render() {
    const { isFormVisible, foods, todayFoods } = this.state;
    return (
      <div>
        Today's list:
        <div>
          <ol>
          {todayFoods.map((tFood) =>(
            <li key={tFood.name}>
              <div>
                {tFood.quantity} {tFood.name} = {tFood.quantity*tFood.calories} kcal
              </div>
            </li>
          ))}
          </ol>
          Today's calories: {this.state.tCalories}
        </div>
        <div className="box">
          <button onClick={this.appearForm}>Add new food</button>
          {isFormVisible &&
          <div>
            <form onSubmit={this.addFood}>
              <label>Name: </label>
              <input
                type='text'
                placeholder='Name'
                value={this.state.name}
                name='name'
                required={true}
                onChange={this.handleInputChange}
              />
              <label>Calories:</label>
              <input
                type='number'
                placeholder='Calories'
                name='calories'
                value={this.state.calories}
                onChange={this.handleInputChange}
                required={true}
              />
              <label>Image: </label>
              <textarea placeholder='Image' name='image' value={this.state.image} onChange={this.handleInputChange}
              />
              <button>Add new food</button>
            </form>
          </div>
          }
          <SearchBar handleOnChange={this.filterFoods}/>
          {foods.map((food, index) => (
            <article key={index} className="media">
              <div className="media-left">
                <figure className="image is-64x64">
                  <img src={food.image} alt="img"/>
                </figure>
              </div>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{food.name}</strong> <br/>
                    <small>{food.calories}</small>
                  </p>
                </div>
              </div>
              <div className="media-right">
                <div className="field has-addons">
                  <div className="control">
                    <input className="input" type="number" name="quantity" value={food.quantity}
                           onChange={(event) => this.setQuantity(event, food)}/>
                  </div>
                  <div className="control">
                    <button className="button is-info" onClick={() => this.selectFood(food, index)}>
                      +
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))
          }
        </div>
      </div>
    );
  }
}

export default FoodBox;
