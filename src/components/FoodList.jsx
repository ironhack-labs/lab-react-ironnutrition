import React from 'react'
import Button from './Button'
import FoodBox from './FoodBox'
import FoodForm from './FoodForm'
import Menu from './Menus'

class FoodList extends React.Component {
    state = {
        search: '',
        menu: [],
        foods: this.props.foods,
        showAddNewFood: false
    }

    handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    onAddToMenu = (food) => {
        const newMenu = [...this.state.menu.filter(f => f !== food), food].filter(f => f.quantity > 0)

        this.setState({
            menu: newMenu
        })
    }

    deleteFromMenu = (food) => {
        this.setState({
            menu: this.state.menu.filter(f => f !== food)
        })
    }

    toggleShowAddForm = () => {
        this.setState((prevState) => {
            return {
                showAddNewFood: !prevState.showAddNewFood
            }
        })
    }


    onAddNewFood = (food) => {
        this.setState((prevState) => {
            return {
                foods: [
                    {...food, quantity: 0},
                    ...prevState.foods
                ]
            }
        })
    }

    render() {
        const filteredFoods = this.state.foods.filter(food => {
            return (
                new RegExp(this.state.search, 'i').test(food.name) ||
                food.calories.toString() === this.state.search
            )
        })

        return (
            <div>
                <div className="columns">
                    <div className="column">
                        <div>
                            <Button className="button is-primary add-btn" onClick={this.toggleShowAddForm}>{this.state.showAddNewFood ? 'Hide' : 'Show'} add new food form</Button>
                            {this.state.showAddNewFood && (
                                <FoodForm onSubmit={this.onAddNewFood} />
                            )}
                        </div>
                        <input type="text"
                            className="input search-bar mb-5 mt-5"
                            name="search"
                            placeholder="Search"
                            onChange={this.handleChange}
                            value={this.state.search}

                        />
                        <div className="Foodlist">
                            {filteredFoods.map((food) => (
                                <FoodBox
                                    food={food}
                                    onAddToMenu={this.onAddToMenu}
                                />
                            ))}
                        </div>

                    </div>
                    <div className="column today">
                    <h1 className="title">Today's Food</h1>
                        <Menu foods={this.state.menu} deleteFromMenu={this.deleteFromMenu} />
                    </div>
                </div>
            </div >
        )
    }
}

export default FoodList