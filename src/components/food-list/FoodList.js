import { Component } from 'react';
import foods from '../../foods.json';
import FoodBox from '../food-box/FoodBox';

class FoodList extends Component {
    state = {
        foods,
        data: {
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        }
    }

    showAddForm = () => {
        const addFormDisplayed = !this.state.addFormDisplayed;
        this.setState({
            addFormDisplayed
        })
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        const { data } = this.state;
        this.setState({
            data: {
                ...data,
                [name]: value
            }
        }
        );
    }

    handleSubmitNewFood = (event) => {
        event.preventDefault();
        this.setState({
            foods: [this.state.data, ...this.state.foods],
            data: {
                name: '',
                name: '',
                calories: 0,
                image: '',
                quantity: 0
            }
        })
    }

    render() {
        const { addFormDisplayed, data, foods } = this.state;
        return (
            <div>
                <div className="is-full is-flex is-justify-content-space-between is-align-items-center">
                    <h1 className="my-6 is-size-1 has-text-weight-semibold">IronNutrition</h1>
                    <button onClick={this.showAddForm} class="button is-dark">{addFormDisplayed ? 'Hide form' : 'Add food'}</button>
                </div>
                { addFormDisplayed ?
                    <form onSubmit={this.handleSubmitNewFood}>
                        <div className="columns is-flex is-align-items-flex-end mb-5">
                            <div className="column">
                                <div class="field">
                                    <label class="label has-text-left">Name</label>
                                    <div class="control">
                                        <input value={data.name} name="name" onChange={this.handleChange} class="input" type="text" placeholder="Tomato" />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div class="field">
                                    <label class="label has-text-left">Calories</label>
                                    <div class="control">
                                        <input value={data.calories} name="calories" onChange={this.handleChange} class="input" type="number" placeholder="150" />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div class="field">
                                    <label class="label has-text-left">Image URL</label>
                                    <div class="control">
                                        <input value={data.image} name="image" onChange={this.handleChange} class="input" type="text" placeholder="https://..." />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div class="field">
                                    <label class="label has-text-left">Quantity</label>
                                    <div class="control">
                                        <input value={data.quantity} name="quantity" onChange={this.handleChange} class="input" type="number" placeholder="50" />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <button className="button is-dark is-fullwidth">Add Food</button>
                            </div>
                        </div>
                    </form>
                    : null
                }
                {foods.map((food, i) => {
                    return <FoodBox key={i} food={food} />
                })}
            </div>
        );
    }
}

export default FoodList;