import './FoodBox.css'
import { Component } from 'react'
import foods from './foods.json'
import NewFoodForm from './NewFoodForm'

class Food extends Component {

    constructor() {
        super()
        this.state = {
            fullList: foods,
            foods: foods,
            showForm: false,
            foodName: ''
        }
    }

    createFood(newFood) {
        const foodsCopy = [...this.state.foods]
        foodsCopy.push(newFood)

        this.setState({ foods: foodsCopy })
        console.log(foods)
    }

    Form = () => {
        this.setState({
            showForm: true
        })
    }

    handleInputChange(e) {
        const value = e.target.value
        const result = this.state.fullList.filter(elm => elm.name.includes(value))

        this.setState({ foods: result })
    }

    render() {
        return (
            <section>

                <button onClick={this.Form}>Add new foods</button>
                {this.state.showForm ? <NewFoodForm addFood={foods => this.createFood(foods)} /> : null}


                <div>

                    <label>
                        Search Food<input type='text' name='foodName' value={this.state.foodName} onChange={e => this.handleInputChange(e)} />
                    </label>

                </div>


                {
                    this.state.foods.map((elm, idx) => <div key={idx} className="box">
                        <article className="media">
                            <div className="media-left">
                                <figure className="image is-64x64">
                                    <img src={elm.image} />
                                </figure>
                            </div>
                            <div className="media-content">
                                <div className="content">
                                    <p>
                                        <strong>{elm.name}</strong> <br />
                                        <small>{elm.calories}</small>
                                    </p>
                                </div>
                            </div>
                            <div className="media-right">
                                <div className="field has-addons">
                                    <div className="control">
                                        <input className="input" type="number" value={elm.quantity} />
                                    </div>
                                    <div className="control">
                                        <button className="button is-info">
                                            +
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>)
                }

            </section>
        )
    }
}

export default Food