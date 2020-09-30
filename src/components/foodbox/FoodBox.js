import React, {Component} from 'react'
import './FoodBox.css'

class FoodBox extends Component {

    constructor(props) {
        super(props)
        this.state = {
            quantity: 1,
            // menu: [],
            // calCount: 0
        }
    }

    render() {

    return (
        
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={this.props.image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{this.props.name}</strong> <br />
                            <small>{this.props.calories}</small>
                        </p>
                    </div>
                    </div>
                    <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input className="input" type="number" value={this.state.quantity} />
                        </div>
                        <div className="control">
                            <button onClick={this.props.updateTodaysFood} className="button is-info">
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
    }
}



export default FoodBox