import React from 'react';
// import CalcFood from './CalcFood'

class FoodBox extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            quantity: this.props.food.quantity,
            name: this.props.food.name
        }
    }
    render() {
        return (
            <div className="level">
            <div className="level-left ml-5">   
                <article className="media box" style={{width: '600px'}}>
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img alt={this.props.food.image} src={this.props.food.image}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>                            
                                <strong>{this.props.food.name}</strong> (
                                <small>{this.props.food.calories}</small> Calories)
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={this.props.food.quantity} />
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
            </div>
        );
    }
}

export default FoodBox;