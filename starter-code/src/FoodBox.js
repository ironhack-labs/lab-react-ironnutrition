import React, {Component} from 'react'

class FoodBox extends Component {
    state = {
        qty: 1
      }
    
      clickHandler = () => {
        this.props.addToDailyHandler(
            this.state.qty,
            this.props.food.name,
            this.props.food.calories
        )
      }
    
    render() {
        return(
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.food.image} alt="No image available"/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{this.props.food.name}</strong> <br />
                            <small>{this.props.food.calories}</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number" 
                                    value= {this.state.qty}
                                    onChange = {(e) => this.setState({qty: e.target.value})}
                                />
                            </div>
                            <div className="control">
                                <button className="button is-info" 
                                onClick= {this.clickHandler}> + </button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>         )
    }
};

export default FoodBox;