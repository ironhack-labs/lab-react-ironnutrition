import React, { Component } from 'react'
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';


class FoodBox extends Component {

    /*
    "name": "Pizza",
    "calories": 400,
    "image": "https://i.imgur.com/eTmWoAN.png",
    "quantity": 0
    */
    
    render() {
        const {myFood, handleAddTotal} = this.props
        return (
            <form onSubmit={(event) => { handleAddTotal(event, myFood)  }} noValidate autoComplete="off">
                <div className="box">
                <article className="media">
                    <div className="media-left">
                    <figure className="image is-64x64">
                        <img src="{`myFood.image`}"/>
                    </figure>
                    </div>
                    <div className="media-content">
                    <div className="content">
                        <p>
                        <strong>{myFood.name}</strong> <br />
                        <small>{myFood.calories}</small>
                        </p>
                    </div>
                    </div>
                    
                </article>
                </div>




            </form>
        )
    }
}

export default FoodBox