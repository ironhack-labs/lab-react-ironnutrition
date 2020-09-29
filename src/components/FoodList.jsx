import React from 'react';
import FoodBox from '../components/FoodBox';
import Menu from './Menu';
import foods from '../foods.json';
import Button from './Button';
import FoodForm from './FoodForm';

class FoodList extends React.Component {
  state = {
    search: '',
    menu: [],
    foods: foods,
    showAddNewFood: false,
  };

  handleChage(event) {
    this.setState({ search: event.target.value });
  }

  onAddToMenu = (food) => {
   
    this.setState({
      menu: [...this.state.menu, food].filter(
        (el) => el.quantity > 0
      ),
    });
  };

  onDeleteToMenu = (food) => {
    this.setState({
      menu: this.state.menu.filter((e) => e !== food),
    });
  };

  toogleShowNewFoodForm = () => {
    this.setState((prevState) => {
      return {
        showAddNewFood: !prevState.showAddNewFood,
      };
    });
  };

  onAddNewFood = (food) => {
    console.log(food)
    this.setState ((prevState) => {
      return {
        foods: [
          { ...food, quantity: 0 },
          ...prevState.foods
        ]
      };
    })
  };

  render() {
    const filteredFoods = this.state.foods.filter((food) =>
      new RegExp(this.state.search, 'i').test(food.name)
    );
    return (
      <div className="FoodList">
        <div>
          <input
            type="text"
            className="input search-bar mb-5"
            name="search"
            placeholder="Search"
            value=""
            onChange={this.handleChage.bind(this)}
            value={this.state.search}
          />
        </div>
        <div>
          <Button onClick={this.toogleShowNewFoodForm}>
            {this.state.showAddNewFood ? 'Hide' : 'Show'} new form Food
          </Button>
          {this.state.showAddNewFood && (
          <FoodForm onSubmit={this.onAddNewFood}/>
          )}
        </div>
        <div className="columns">
          <div className="column">
            {filteredFoods.map((food, i) => (
              <FoodBox
                key={i}
                food={food}
                onAddToMenu={this.onAddToMenu}
                onDeleteToMenu={this.onDeleteToMenu}
              />
            ))}
          </div>
          <div className="column">
            <Menu foods={this.state.menu} />
          </div>
        </div>
      </div>
    );
  }
}

export default FoodList;
