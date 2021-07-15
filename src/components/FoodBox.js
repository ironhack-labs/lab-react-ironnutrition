import React, { Component } from 'react'
import 'bulma/css/bulma.css';


 class FoodBox extends Component {

    render() {

        const { foods, onPlus } = this.props

        return (
            <div>
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