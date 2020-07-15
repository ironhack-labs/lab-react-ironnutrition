import React, {Component} from 'react'

import foods from '../../foods.json'
import Form from '../form/form'
import Search from '../search/search'

class foodBox extends Component {

    constructor (){
        super ()
        this.state = {
            foods: foods,
            isClicked: false
        }
    }

    showForm = () => {
        this.setState({isClicked: !this.state.isClicked})
    }

    insertFood = (newFood) => {
        const copyFood = [...this.state.foods]
        copyFood.push(newFood)
        this.setState({foods: copyFood})
    }

    searchFood = (foodName) => {
        const copyFood = [...this.state.foods]
        const newFoodArray = copyFood.filter((elem) => elem.name.includes(foodName))
        this.setState({foods: newFoodArray})
    }

    render () {
        return (
        <>
            <div>
                {this.state.isClicked ? <Form  addFood={this.insertFood}/> : null}
                <button onClick={this.showForm}>Añadir nuevo alimento</button>
            </div>
         
            <Search searchFood={this.searchFood}/>

            <div className="box">

            {this.state.foods.map((food, index) => {
                return (
                        <article className="media">
                            <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={food.image} alt='hola'/>
                            </figure>
                            </div>
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories}</small>
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
                 )
            })}
            </div>
        </>
        )
    }
}

export default foodBox