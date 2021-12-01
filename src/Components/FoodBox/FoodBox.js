import { Component } from "react";
import './FoodBox.css'


class FoodBox extends Component {
    constructor({thisFood}) {
        super()

        this.state = {
            name: thisFood.name,
            calories: thisFood.calories,
            image: thisFood.image,
            quantity: thisFood.quantity,
        }
    }


    render() {
        return (
            <>
                <div className="">
                    <article className="card">
                        <div>
                            <figure>
                                <img src={this.state.image} alt={this.state.name}/>
                            </figure>
                        </div>

                        <div>
                            <div>
                                <p>
                                <strong>{this.state.name}</strong> <br />
                                <small>{this.state.calories}</small>
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="quantity-container">
                                <div className="control">
                                    <input className="input" type="number" value="1" onChange={() => {}} />
                                </div>
                                
                                <div className="control">
                                    <button className="add-btn">
                                        +
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </>
        )
    }
}




export default FoodBox