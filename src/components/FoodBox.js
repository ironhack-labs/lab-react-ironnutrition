import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import AddForm from './AddForm'


 class FoodBox extends Component {

    state = {
        showForm: false
    }

    handleButton = () => {
        this.setState({
            showForm: true
        })
    }

    handleAddFood = (event) => {
        event.preventDefault()

        this.setState({
            showForm: false
        })

        let newFood = {
            name: event.target.name.value,
            quantity: event.target.quantity.value,
            calories: event.target.calories.value
        }
    
        this.props.onAddNewFoot(newFood)
    }


    render() {

        const { foods, onPlus } = this.props
        const { showForm } = this.state

       

        return (
            <div>

                {
                    showForm ?  <AddForm onAddFood={this.handleAddFood} /> : <button onClick={this.handleButton} >Show Form</button>
                }
                

                {
                    foods.map((food) => {
                        
                        return (
                            <form onSubmit={(event) => {onPlus(event) }} noValidate autoComplete="off">
                                <div className="box">
                                    <article className="media">
                                    <div className="media-left">
                                        <figure className="image is-64x64">
                                        <img src={food.image} alt='' />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <div className="content">
                                        <p className="name">
                                            <strong >{food.name}</strong> <br />
                                    
                                        </p>

                                        <p className="calories">
                                            <small >{food.calories}</small>
                                        </p>
                                        </div>
                                    </div>


                                    <div className="media-right">
                                        <div className="field has-addons">
                                        <div className="control">
                                            <input className="input" type="number" value="1" />
                                        </div>
                                        <div className="control">
                                            <button className="button is-info">
                                            +
                                            </button>
                                        </div>
                                        </div>

                                    </div>
                                    </article>
                                </div>
                            </form>

                        );

                    })
                }
            </div>
        )
    }
}

export default FoodBox