import React, {Component} from "react"

class FoodBox extends Component {
    constructor(props) {

        super(props)

        this.state = {
           quantity: 0
        }
    }
    render () {
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
                                <input
                                    className="input"
                                    type="number"
                                    min="0"
                                    value={undefined}
                                    onChange={(e) => this.state.quantity = parseInt(e.target.value) }
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" onClick={(e) => this.props.updateToday(this.props.name, this.state.quantity, this.props.calories)}>
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


export default FoodBox;


