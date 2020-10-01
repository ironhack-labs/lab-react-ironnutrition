import React from 'react';
import FoodBox from './FoodBox';
import FoodForm from './FoodForm';
import Menu from './Menu';
import Button from './Button';
import foods from '../foods.json';
import './FoodList.css'

class FoodList extends React.Component {

  state = {
    search: '',
    foods: foods,
    menu: [],
    showAddNewFood: false
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

  toggleAddFood = () => {
    this.setState((prevState) => ({
      showAddNewFood: !prevState.showAddNewFood
    }))
  }

  addNewFood = (food) => {
    this.setState((prevState) => ({
      foods: [{...food, quantity: 0}, ...prevState.foods]
    }))
  }

    render() {

        const filteredFoods = this.state.foods.filter(food => {
            return(
                new RegExp(this.state.search, "i").test(food.name) ||
                food.calories.toString() === this.state.search
            );
        });

        return (
            <div className="food-list">

                <div className="title">
                    <h1>IronNutrition</h1>
                </div>

                <input 
                    type='text' 
                    className="input search-bar mb-2 search-deco"
                    name='search'
                    placeholder="Search"
                    onChange={this.handleChange} 
                    value={this.state.search} 
                />
                 <div className="add-food">
                    <Button onClick={this.toggleAddFood} >
                        {this.state.showAddNewFood ? 'Hide' : 'Show'}: add new food
                    </Button>

                    {this.state.showAddNewFood && (
                        <FoodForm onSubmit={this.addNewFood} />
                    )}
                </div>
                <div className="columns">
                    <div className="column">

                        {filteredFoods.map((food) => 
                            <FoodBox 
                                food={food}
                                onAddToMenu={this.onAddToMenu}
                            />
                        )}
                    </div>
                    <div className="column content">
                        <Menu foods={this.state.menu} deleteFromMenu={this.deleteFromMenu}/>
                    </div>
                </div>
            </div>
        )
    }
}


export default FoodList 