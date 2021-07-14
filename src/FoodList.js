import { Component } from 'react';
import AddForm from './AddForm';
import FoodBox from './FoodBox';
import foods from './foods.json';

class FoodList extends Component {
  constructor() {
    super();

    this.state = {
      list: [...foods],
    };
  }

  addFood = (food) => {
    console.log(food);

    const { name, calories, image, quantity } = food;
    const list = [...this.state.list];

    list.push({ name, calories, image, quantity });

    this.setState({
      list: [...list],
    });
  };

  render() {
    return (
      <>
        <div className="columns is-centered">
          <ul className="box column is-half">
            {this.state.list.map((food, i) => (
              <li key={i}>
                <FoodBox food={food} />
              </li>
            ))}
          </ul>
        </div>

        <div className="columns is-centered">
          <AddForm addFood={this.addFood} className="column is-centered" />
        </div>
      </>
    );
  }
}

export default FoodList;
