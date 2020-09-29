import React from 'react';
import FoodBox from './FoodBox';
import Menu from './Menu';
import foods from '../foods.json';
import Button from './Button';
import FoodForm from './FoodForm';

class FoodList extends React.Component {
  state = {
    search: '',
    menu: [],
    foods: foods,
    showAddNewForm: false,
  };

  handleChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  deleteFromMenu = (food) => {
    this.setState({
      menu: this.state.menu.filter((f) => f !== food),
    });
  };

  onAddToMenu = (food) => {
    const newMenu = [...this.state.menu.filter((f) => f !== food), food].filter(
      (f) => f.quantity > 0
    );
    this.setState({
      menu: newMenu,
    });
  };

  toggleShowNewFoodForm = () => {
    this.setState((prevState) => {
      return {
        showAddNewForm: !prevState.showAddNewForm,
      };
    });
  };

  onAddNewFood = (food) => {
    this.setState((prevState) => {
      return {
        foods: [{ ...food, quantity: 0 }, ...prevState.foods],
      };
    });
  };

  render() {
    const filteredFoods = this.state.foods.filter((food) => {
      return (
        new RegExp(this.state.search, 'i').test(food.name) ||
        food.calories.toString() === this.state.search
      );
    });
    return (
      <div className="FoodList">
        <input
          type="text"
          className="input search-bar mb-2"
          name="search"
          placeholder="Search"
          onChange={this.handleChange.bind(this)}
          value={this.state.search}
        />

        <div>
          <Button onClick={this.toggleShowNewFoodForm}>
            {this.state.showAddNewForm ? 'Hide' : 'Show'} new food form
          </Button>
          {this.state.showAddNewForm && <FoodForm onSubmit={this.onAddNewFood}/>}
        </div>

        <div className="columns">
          <div className="column">
            {filteredFoods.map((food) => (
              <FoodBox food={food} onAddToMenu={this.onAddToMenu} />
            ))}
          </div>
          <div className="content column">
            <Menu
              foods={this.state.menu}
              deleteFromMenu={this.deleteFromMenu}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FoodList;
