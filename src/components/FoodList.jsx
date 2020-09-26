import React from 'react'
import FoodBox from './FoodBox';
import '../stylesheets/FoodList.css'
import Menu from './Menu';

class FoodList extends React.Component {
  state = {
    search: '',
    menu: []
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  deleteFromMenu = (food) => {
    this.setState({
      menu: this.state.menu.filter(f => f !== food)
    })
  }

  onAddToMenu = (food) => {
    const newMenu = [
      ...this.state.menu.filter(f => f !== food),
      food
    ].filter(f => f.quantity > 0)

    this.setState({
      menu: newMenu
    })
  }

  render() {
    const filteredFoods = this.props.foods.filter(food => {
      return (
        new RegExp(this.state.search, "i").test(food.name) ||
        food.calories.toString() === this.state.search
      )
    })

    return (
      <div className="FoodList">
        <input
          type="text"
          className="input search-bar mb-2"
          name="search"
          placeholder="Search"
          onChange={this.handleChange}
          value={this.state.search}
        />

        <div className="columns">
          <div className="column">
            {filteredFoods.map((food) => (
              <FoodBox
                food={food}
                onAddToMenu={this.onAddToMenu}
              />
            ))}
          </div>

          <div className="column content">
            <Menu foods={this.state.menu} deleteFromMenu={this.deleteFromMenu}/>
          </div>
        </div>
      </div>
    );
  }
}

export default FoodList